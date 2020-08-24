const S = require("sequelize");
const db = require("../config/db");

class Order extends S.Model {}

Order.init(
  {
    quantity: {
      type: S.INTEGER,
      defaultValue: 1,
    },
    date: {
      type: S.DATE,
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
    shortDate: {
      type: S.STRING,
    },
  },
  { sequelize: db, modelName: "order" }
);

Order.beforeCreate((order) => {
  order.shortDate = order.date.toString().slice(4, 15);
});

module.exports = Order;
