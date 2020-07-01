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
  console.log('REQ.BODY ', req.body)
  req.body.map(order => {
    Product.findByPk(order.id)
    .then((productFound)=> {
      const product = productFound;
      return Order.findOne({
        where: {
          productId: order.id,
          state: "pending",
          userId: req.user.id,
        }
      })
      .then(orderFound => {
        if(!orderFound){
          return Order.create({
            total: order.price,
            quantity: order.quantity
          })
          .then((orderCreated) => {
            const orden = orderCreated
            orden.setProduct(product)
            orden.setUser(req.user)
          })
        }
        else{
          orderFound.update({
            quantity: order.quantity
          })
        }
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
      })
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
  console.log('REQ.PARAMS ', req.params)
  Order.destroy({
    where: { 
      userId: req.user.id,
      productId: req.params.productId,
      state: "pending"
    },
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
  console.log(req.body, 'REQBODY')
  Order.update({total:req.body.total,
                quantity:req.body.quantity,
               }, {
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
