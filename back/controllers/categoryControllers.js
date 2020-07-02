const { Category, Product } = require("../models");

const getCategory = (req, res) => {
  Category.findAll({
    where: {
      name: req.params.category,
    },
    include: [
      {
        model: Product,
      },
    ],
  }).then((products) => res.send(products));
};

const newCategory = (req, res) => {
  console.log(req.body);
  Category.create(req.body).then(() => {
    Category.findAll().then((categories) => {
      res.send(categories);
    });
  });
};

const getCategories = (req, res) => {
  Category.findAll().then((categories) => res.send(categories));
};

module.exports = { getCategory, newCategory, getCategories };
