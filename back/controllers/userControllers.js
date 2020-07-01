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

const findSingleUser = (req, res) => {
  User.findByPk(req.params.id).then((user) => {
    res.send(user);
  });
};

const editUser = (req, res) => {
  User.update(
    { role: req.body.role },
    {
      where: { id: req.params.id },
      returning: true,
    }
  ).then(() => {
    res.sendStatus(200);
  });
};

const deleteUser = (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.sendStatus(200);
  });
};

module.exports = {
  registerUser,
  userLogin,
  userLogout,
  userCookie,
  findAllUsers,
  findSingleUser,
  editUser,
  deleteUser,
};
