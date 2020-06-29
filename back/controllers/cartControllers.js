const { Order } = require("../models");
const { Product } = require("../models");

const addToCart = (req, res) => {
  Product.findByPk(req.body.id)
  .then((productFound) => {
    const product = productFound;
    Order.create({ total: req.body.price })
    .then((orderCreated) => {
      const order = orderCreated;
      order.setProduct(product);
      order.setUser(req.user)
      .then(() => {
        Order.findAll({
          where: { userId: req.user.id, state: "pending" },
          include: [{
              model: Product,
            }],
              order: [["id", "DESC"]],
        }).then((cart) => {
          res.send(cart);
        });
      });
    });
  });
};

const assignCart = (req, res) => {
  req.body.map(order => {
    Product.findByPk(order.id)
    .then((productFound)=> {
      const product = productFound;
      Order.create({ total: order.price})
      .then((orderCreated) => {
        const orden = orderCreated
        orden.setProduct(product)
        orden.setUser(req.user)
      })
    })
  })
    Order.findAll({
      where: { userId: req.user.id, state: "pending" },
      include: [{
          model: Product,
        }],
          order: [["id", "DESC"]],
    }).then((cart) => {
      res.send(cart);
    });
  }

//Esto está medio hardocdeado para que no se rompa si no hay req.user. Arreglar cuando se haga el carrito no loggeado.
const findAllCart = (req, res) => {
  if (req.user) {
    Order.findAll({
      where: { userId: req.user.id, state: "pending" },
      include: [
        {
          model: Product,
        },
      ],
      order: [["id", "DESC"]],
    }).then((cart) => {
      res.send(cart);
    });
  } 
  else res.send([]); // trabajar acá para usuario no loggeado
};

const deleteOrder = (req, res) => {
  Order.destroy({
    where: { productId: req.params.productId, userId: req.user.id },
  }).then(() => {
    Order.findAll({
      where: { userId: req.user.id, state: "pending" },
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
  Order.update(req.body, {
    returning: true,
    where: { id: req.body.orderId },
  }).then(() => {
    Order.findAll({
      where: { userId: req.user.id, state: "pending" },
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

module.exports = { addToCart, findAllCart, deleteOrder, updateOrder, assignCart };
