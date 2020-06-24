const S = require("sequelize");
const db = require("../config/db");

class Order extends S.Model {}

Order.init(
  {
    quantity: {
      type: S.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    date: {
      type: S.DATE,
      allowNull: false,
      defaultValue: S.NOW,
    },
    state: {
      type: S.ENUM(["pending", "completed"]),
      defaultValue: "pending",
    },
    address: {
      type: S.STRING,
      defaultValue: "incomplete",
    },
    total: {
      type: S.INTEGER,
      defaultValue: 0,
    },
  },
  { sequelize: db, modelName: "order" }
);

module.exports = Order;
