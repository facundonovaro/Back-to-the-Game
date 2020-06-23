const S = require("sequelize");
const db = require("../config/db");
const crypto = require("crypto");

class User extends S.Model {}

User.init(
  {
    firstName: {
      type: S.STRING,
      allowNull: false,
    },
    lastName: {
      type: S.STRING,
      allowNull: false,
    },
    username: {
      type: S.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
      unique: true,
    },
    password: {
      type: S.STRING,
      allowNull: false,
    },
    role: {
      type: S.ENUM(["user", "admin", "superAdmin"]),
      defaultValue: "user",
    },
    salt: {
      type: S.STRING,
    },
  },
  { sequelize: db, modelName: "user" }
);

//config passport salt
User.beforeCreate((user) => {
  user.salt = crypto.randomBytes(20).toString("hex");
  user.password = user.hashPassword(user.password);
});

//INSTANCE METHODS
User.prototype.hashPassword = function (password) {
  return crypto.createHmac("sha1", this.salt).update(password).digest("hex");
};

User.prototype.validPassword = function (password) {
  return this.password === this.hashPassword(password);
};

module.exports = User;
