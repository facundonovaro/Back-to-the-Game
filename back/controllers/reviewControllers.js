<<<<<<< HEAD
const {Review} = require ('../models/index')
const {Product} = require('../models/index')
const {User} =  require('../models/index')


const findAllProductReviews = (req, res)=>{
  Review.findAll({where:{
    productId: req.params.id},
    include : [
      {
        model: User
       }
      ]
     }
    )
  .then((reviews)=>{
    res.json(reviews).status(200)
=======
const { Review } = require('../models/index')
const { Product } = require('../models/index')


const findAllProductReviews = (req, res) => {
  Review.findAll({
    where: {
      productId: req.params.id
    }
>>>>>>> a1722dfa4692130903d913f510b8f37f1f523f32
  })
    .then((reviews) => {
      res.json(reviews).status(200)
    })
}


<<<<<<< HEAD
const addReview = (req, res)=>{
  console.log('REQ.BODY', req.body)
  Product.findOne({where:{
    id: req.body.productId
  }}).then((productFound)=>{
  const product = productFound
  Review.create({
    description: req.body.description,
    rate: req.body.rate,   
  })
     .then((review)=>{
     product.addReview(review)
     review.setUser(req.user.id)
    }).then(()=>{
      return Review.findAll({where:{
        productId: req.body.productId},
        include: [
        {
          model: User,
        },
      ],
      order: [
        ['id', 'DESC']
      ]
      })
    }).then((reviews)=>{
      console.log('REVIEWS', reviews)
      res.json(reviews).status(200)
=======
const addReview = (req, res) => {

  Product.findOne({
    where: {
      id: req.body.productId
    }
  }).then((productFound) => {
    const product = productFound
    Review.create({
      description: req.body.description,
      rate: req.body.rate
>>>>>>> a1722dfa4692130903d913f510b8f37f1f523f32
    })
      .then((review) => {
        product.addReview(review)
        review.setUser(req.body.userId)
      }).then(() => {
        Review.findAll({
          where: {
            productId: req.body.productId
          }
        })
          .then((reviews) => {
            res.json(reviews).status(200)
          })
      })
  })
}


module.exports = { addReview, findAllProductReviews }