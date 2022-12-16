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
    let AUTH_SECRET_OR_KEY = '34r938gj9g82j89rg8298rj42gfg-392gj9';

    jwt.sign(payload, AUTH_SECRET_OR_KEY, { expiresIn: '1h' }, (err, token) => {
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