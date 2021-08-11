const Card = require('../models/card');

const NotFoundError = require('../errors/NotFoundError');
const BadRequestError = require('../errors/BadRequestError');
const ForbiddenError = require('../errors/BadRequestError');
const InternalServerError = require('../errors/UnauthorizedError');

const {
  SUCCESS_OK,
} = require('../errors/errorStatuses');

module.exports.getCards = (req, res, next) => {
  Card.find({})
    .then((cards) => res.status(SUCCESS_OK).send({ data: cards }))
    .catch((err) => {
      if (err.name === 'CastError') {
        throw new BadRequestError('Переданы некорректные данные');
      }
      throw new InternalServerError('Ошибка сервера. Ошибка по-умолчанию');
    })
    .catch(next);
};

module.exports.createCard = (req, res, next) => {
  const { name, link } = req.body;

  Card.create({
    name,
    link,
    owner: req.user._id,
  })
    .then((card) => res.status(SUCCESS_OK).send({ data: card }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new BadRequestError('Ошибка валидации при создании карточки');
      } else if (err.name === 'CastError') {
        throw new BadRequestError('Переданы некорректные данные при создании карточки');
      }
      throw new InternalServerError('Ошибка сервера. Ошибка по-умолчанию');
    })
    .catch(next);
};

module.exports.deleteCard = (req, res, next) => {
  const { cardId } = req.params;
  const userId = req.user._id;

  Card.findById(cardId)
    .orFail(new Error('NotFound'))
    .then((card) => {
      if (card.owner.toString() === userId) {
        Card.findByIdAndRemove(cardId)
          .then(() => res.status(SUCCESS_OK).send({
            message: 'Удаление карточки прошло успешно',
          }));
      } else {
        throw new ForbiddenError('Вы не можете удалять чужие карточки');
      }
    })
    /*
    Card.findById(cardId)
      .orFail(new Error('NotFound'))
      .then((card) => {
        if (card.owner.toString() !== userId) {
          throw new ForbiddenError('Вы не можете удалять чужие карточки');
        } else {
          Card.findByIdAndRemove(cardId)
            .then(() => res.status(SUCCESS_OK).send(card))
            .catch(next);
        }
      })
      */
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log('Поймана ошибка в блоке catch');
      // eslint-disable-next-line no-console
      console.dir(err);

      if (err.name === 'CastError') {
        throw new BadRequestError('Переданы некорректные данные при удалении карточки');
      }
      if (err.message === 'NotFound') {
        throw new NotFoundError('Запрашиваемая карточка пользователя не найдена');
      }
      throw new InternalServerError('Ошибка сервера. Ошибка по-умолчанию');
    })
    .catch(next);
};

module.exports.likeCard = (req, res, next) => {
  const { cardId } = req.params;

  Card.findByIdAndUpdate(
    cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .orFail(new Error('NotFound'))
    .then((card) => res.status(SUCCESS_OK).send(card))
    .catch((err) => {
      if (err.name === 'CastError') {
        throw new BadRequestError('Переданы некорректные данные отметки "Мне нравится"');
      }
      if (err.message === 'NotFound') {
        throw new NotFoundError('Запрашиваемая карточка пользователя не найдена');
      }
      throw new InternalServerError('Ошибка сервера. Ошибка по-умолчанию');
    })
    .catch(next);
};

module.exports.dislikeCard = (req, res, next) => {
  const { cardId } = req.params;

  Card.findByIdAndUpdate(
    cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .orFail(new Error('NotFound'))
    .then((card) => res.status(SUCCESS_OK).send(card))
    .catch((err) => {
      if (err.name === 'CastError') {
        throw new BadRequestError('Переданы некорректные данные отметки "Мне нравится"');
      }
      if (err.message === 'NotFound') {
        throw new NotFoundError('Запрашиваемая карточка пользователя не найдена');
      }
      throw new InternalServerError('Ошибка сервера. Ошибка по-умолчанию');
    })
    .catch(next);
};