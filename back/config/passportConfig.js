const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy
const { User } = require('../models/index');

passport.use(
    new LocalStrategy(function (username, password, done) {
      User.findOne({ where: { username: username } })
        .then((user) => {
          if (!user) {
            return done(null, false, {
              message: "usuario incorrecto",
            });
          }
          if (!user.validPassword(password)) {
            return done(null, false, {
              message: "contraseña incorrecta",
            });
          }
          return done(null, user);
        })
        .catch(done);
    })
  );

// esto es para actualizar el status

passport.serializeUser((user, done) => {
    done(null, user);
  });
  
  passport.deserializeUser((user, done) => {
    User.findByPk(user.id)
      .then((user) => {
        done(null, user);
      })
      .catch(done);
  });

module.exports = passport;