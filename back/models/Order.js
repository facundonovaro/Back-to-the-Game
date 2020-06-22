const S = require("sequelize");
const db = require("../config/db");

class Order extends S.Model {}

Order.init(
  {
    quantity: {
      type: S.INTEGER,
      allowNull: false,
    },
    date: {
      type: S.DATE,
      allowNull: false,
    },
    state: {
      type: S.ENUM(["pending", "completed"]),
      defaultValue: "pending",
    },
    address: {
      type: S.STRING,
      allowNull: false,
    },
    total: {
      type: S.INTEGER,
      defaultValue: 0,
    },
  },
  { sequelize: db, modelName: "order" }
);

module.exports = Order;
