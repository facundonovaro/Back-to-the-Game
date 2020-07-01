const { Order } = require("../models");
const { Product } = require("../models");
const _ = require('lodash')

const updateOrderAdress = (req,res) => {
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
        where: { userId: req.body.userId,
        state:'pending' }
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
                    required: true
                },
            ],
            order: [["updatedAt", "ASC"]],
        }).then((cart) => {

            let updatedAtGroups = _.groupBy(cart,function(obj){
                return obj.updatedAt
            })
            res.send(updatedAtGroups);
        });
    } else res.send([]);
};






module.exports = { updateOrderAdress, updateOrderStatus, getLastOrders };