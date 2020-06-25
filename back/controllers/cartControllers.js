const { Order, User } = require("../models");
const { Product } = require("../models");

const addToCart = (req, res) => {
  const product = Product.findByPk(req.body.id);
  const user = User.findByPk(req.body.userId);
  Promise.all([product, user]).then(([product, user]) => {
    Order.findOne({
      where: { productId: req.body.id, userId: req.body.userId },
    }).then((foundProduct) => {
      if (foundProduct) res.status(200).send("Already added");
      if (!foundProduct) {
        Order.create({ total: req.body.price }).then((orderCreated) => {
          const order = orderCreated;
          order.setProduct(product);
          order.setUser(user).then((orderCreated) => {
            res.status(201).send(orderCreated);
          });
        });
      }
    });
  });
};

const findAllCart = (req, res) => {
  Order.findAll({
    where: { userId: req.params.id, state: "pending" },
    include: [
      {
        model: Product,
      },
    ],
    order: [["id", "DESC"]],
  }).then((cart) => {
    res.send(cart);
  });
};

const deleteOrder = (req, res) => {
  Order.destroy({
    where: { id: req.params.orderId },
  }).then(() => {
    Order.findAll({
      where: { userId: req.params.userId, state: "pending" },
      include: [
        {
          model: Product,
        },
      ],
      order: [["id", "DESC"]],
    }).then((cart) => {
      res.send(cart);
    });
  });
};

const updateOrder = (req, res) => {
  Order.update(
    { quantity: req.body.quantity },
    {
      returning: true,
      where: { id: req.body.orderId },
    }
  ).then(() => {
    Order.findAll({
      where: { userId: req.body.userId, state: "pending" },
      include: [
        {
          model: Product,
        },
      ],
      order: [["id", "DESC"]],
    }).then((cart) => {
      res.send(cart);
    });
  });
};

module.exports = { addToCart, findAllCart, deleteOrder, updateOrder };
