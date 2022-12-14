const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


exports.jwtSign = (payload) => {
  const {
    SESSION_EXPIRES_IN,
    AUTH_SECRET_OR_KEY
  } = process.env;

  return new Promise((resolve, reject) => {
    //AUTH_SECRET_OR_KEY
    //SESSION_EXPIRES_IN

    jwt.sign(payload, 'fadsfdsvarg5345dsfdsf2fdsf243t34grt654re', { expiresIn: '1h' }, (err, token) => {
      if(err) {
        reject(err);
      } else {
        resolve(token);
      }
    });
  })
}

exports.bcryptHash = (str) => {
  const salt = 10;

  return new Promise((resolve, reject) => {
    bcrypt.hash(str, salt, (err, hash) => {
      if(err) {
        reject(err);
      } else {
        resolve(hash);
      }
    });
  });
}