const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const secretOrKey = '34r938gj9g82j89rg8298rj42gfg-392gj9';
//process.env.AUTH_SECRET_OR_KEY;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey,
};

module.exports = passport => {
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    User.findById(jwt_payload.id)
      .then(user => {
        if(user){
          return done(null, user);
        }
        return done(null, false);
      })
      .catch(err => {
        throw new Error(err)
      });
  }));
}