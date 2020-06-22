const S = require("sequelize");
const db = require("../config/db");

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

module.exports = User;
