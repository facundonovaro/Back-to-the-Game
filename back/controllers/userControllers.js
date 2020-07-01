const User = require("../models/User");
const { findAll, findOne } = require("../models/User");

const registerUser = (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
    },
  }).then((foundUser) => {
    if (!foundUser) {
      User.create(req.body).then((user) => res.status(200).send(user));
    }

    if (foundUser) {
      res.sendStatus(401);
    }
  });
};

const userLogin = (req, res) => {
  res.status(201).send(req.user);
};

const userLogout = (req, res) => {
  req.logOut();
  res.status(201).send("DESLOGEADO");
};

const userCookie = (req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user);
  } else {
    res.json({});
  }
};

const findAllUsers = (req, res) => {
  User.findAll().then((users) => {
    res.status(200).send(users);
  });
};

module.exports = {
  registerUser,
  userLogin,
  userLogout,
  userCookie,
  findAllUsers,
};
