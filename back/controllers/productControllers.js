const { Product } = require("../models");
const { Op } = require("sequelize");

const findProduct = (req, res) => {
  Product.findByPk(req.params.id).then((product) => res.send(product));
};

const findAllProducts = (req, res) => {
  Product.findAll({ order: [["name", "ASC"]] }).then((products) => {
    res.json(products);
  });
};

const addProduct = (req, res) => {
  console.log(req.body, "REQ BODY!!!!!");
  Product.create(req.body).then((productCreated) => {
    const product = productCreated;
    req.body.category.map((cat) => {
      product.addCategory(cat);
    });
    Product.findAll().then((products) => {
      res.status(201).json(products);
    });
  });
};

const updateProduct = (req, res) => {
  Product.findByPk(req.params.id)
    .then((product) => product.update(req.body))
    .then(() => {
      Product.findAll().then((products) => {
        res.json(products);
      });
    });
};

const deleteProduct = (req, res) => {
  Product.findByPk(req.params.id)
    .then((product) => product.destroy())
    .then(() => {
      Product.findAll({ order: [["name", "ASC"]] }).then((products) => {
        res.json(products);
      });
    });
};

module.exports = {
  findAllProducts,
  findProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
