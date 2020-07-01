const S = require("sequelize");
const db = require("../config/db");

class Review extends S.Model {}

Review.init(
  {
    description: {
      type: S.TEXT,
      allowNull: false,
    },
    rate: {
      type: S.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "review" }
);


module.exports = Review;
