const {Review} = require ('../models/Review')
const {Product} = require('../models/Product')
const {User} = require('../models/User')

const addReview = (req, res)=>{
 const product =  Product.findByPk(req.params.id)
 const user = User.findByPk(req.body.id)
   Promise.all([product, user]).then(([product, user])=>{
         Review.create({
             description: req.body.description,
             rate: req.body.rate})
              .then((review)=>{
              product.addReview(review)
              user.setReview(review)
               .then((productRated)=>{
                   res.status(200).json(productRated)
               })
    })
  })
}


module.exports = { addReview }