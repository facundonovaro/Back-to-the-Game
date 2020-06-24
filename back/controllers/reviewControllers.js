const {Review} = require ('../models/Review')
const {Product} = require('../models/Product')
const {User} = require('../models/User')

const addReview = (req, res)=>{
 const product =  Product.findByPk(req.body.id)
 const user = User.findByPk(req.body.userId)
   Promise.all([product, user]).then(([product, user])=>{
         Review.create({
             description: req.body.description,
             rate: req.body.rate})
             .then((review)=>{
               product.addReview(review)
               product.setUser(user)
               .then((productReviewed)=>{
                   res.status(200).json(productReviewed)
               })
    })
  })
}


module.exports = {addReview}