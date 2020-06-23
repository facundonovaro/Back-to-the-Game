const Category = require("./Category");
const User = require("./User");
const Product = require("./Product");
const Review = require("./Review");
const Order = require("./Order");

Product.belongsToMany(Category, { through: "producto_categoria" });
Category.belongsToMany(Product, { through: "producto_categoria" });
Review.belongsTo(User);
Product.hasMany(Review);
Order.hasMany(Product);
Order.belongsTo(User);

module.exports = { Category, User, Product, Review, Order };
