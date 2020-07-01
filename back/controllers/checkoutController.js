const { Order } = require("../models");
const { Product } = require("../models");

const updateOrderAdress = (req,res) => {
    console.log(req.body, 'REQBODY')
    Order.update({ address: req.body.orderAdress }, {
        where:  {userId: req.body.userId,
                state:"pending",
        }

    })
   .then(()=>{
        res.sendStatus(201)
    })
}

const updateOrderStatus = (req, res) => {
    Order.update({ state: "completed" }, {
        where: { userId: req.body.userId }
    })
    .then(()=>{
        res.sendStatus(201)
    })
}
const getLastOrders = (req, res) => {
    if (req.user) {
        Order.findAll({
            where: { userId: req.user.id, state: "completed" },
            include: [
                {
                    model: Product,
                },
            ],
            order: [["id", "DESC"]],
        }).then((cart) => {
            res.send(cart);
        });
    } else res.send([]);
};






module.exports = { updateOrderAdress, updateOrderStatus, getLastOrders };