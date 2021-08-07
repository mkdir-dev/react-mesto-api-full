require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');

const { login, createUser } = require('./controllers/users');

const {
  signinValidation,
  signupValidation,
} = require('./middlewares/validation');

const auth = require('./middlewares/auth');
const usersRoutes = require('./routes/users');
const cardsRoutes = require('./routes/cards');

const NotFoundError = require('./errors/NotFoundError');
// eslint-disable-next-line import/order
const { errors } = require('celebrate');

const { requestCors } = require('./middlewares/cors');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

const { PORT = 3000 } = process.env;
const app = express();

app.use(cors());
app.use(requestCors);

const { NODE_ENV, PROD_DB } = process.env;
const DEV_DB = 'mongodb://localhost:27017/mestodb';
console.log(NODE_ENV);
console.log(PROD_DB);

mongoose.connect(NODE_ENV === 'production' ? PROD_DB : DEV_DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(limiter);

app.use('/', express.json());
app.use(helmet());
app.use(cookieParser());
app.use(requestLogger);

app.post('/signin', signinValidation, login);
app.post('/signup', signupValidation, createUser);

app.use('/users', auth, usersRoutes);
app.use('/cards', auth, cardsRoutes);

app.use(errorLogger);

app.use(errors());

app.get('*', () => {
  throw new NotFoundError('Запрашиваемый ресурс не найден');
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;

  res.status(statusCode).send({
    message: statusCode === 500
      ? 'На сервере произошла ошибка'
      : message,
  });
  next();
});

app.listen(PORT);