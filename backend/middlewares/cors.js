const allowedCors = [
  'https://mesto-mkdirdev.nomoredomains.club',
  'http://mesto-mkdirdev.nomoredomains.club',
  'https://api.mesto-mkdirdev.nomoredomains.club',
  'http://api.mesto-mkdirdev.nomoredomains.club',
  'localhost:3000',
  'http://localhost:3000',
];

module.exports.requestCors = (req, res, next) => {
  const { origin } = req.headers;

  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }

  const { method } = req;
  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
  const requestHeaders = req.headers['access-control-request-headers'];

  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    return res.end();
  }

  return next();
};