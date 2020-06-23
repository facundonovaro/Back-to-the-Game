const express = require("express");
const app = express();
const db = require("./config/db");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { User } = require("./models/index");
const router = require("./routes/index");

app.use(
  session({
    secret: "backToTheGame",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/public")));

app.use(morgan("dev"));

//Body Parser
app.use(express.json());
app.use(express.urlencoded());

app.use("/api", router);

app.use(passport.initialize());
app.use(passport.session());

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

passport.serializeUser((user, done) => {
  console.log(user);
  done(null, user);
});

passport.deserializeUser((user, done) => {
  User.findByPk(user.id)
    .then((user) => {
      done(null, user);
    })
    .catch(done);
});

//VIEW
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

//ERROR MIDDLEWARE
app.use(function (err, req, res, next) {
  console.error(err);
  res.status(err.status || 500).send(err.message);
});

//SERVER
db.sync({ force: false })
  .then(() => {
    console.log("Conectado a la base de datos");
    app.listen(1337, console.log("Escuchando el puerto 1337"));
  })
  .catch((err) => console.log(err));

module.exports = app;
