const S = require("sequelize");
const db = require("../config/db");

class Product extends S.Model {}

Product.init(
  {
    name: {
      type: S.STRING(),
      allowNull: false,
    },
    description: {
      type: S.STRING,
      allowNull: false,
    },
    price: {
      type: S.INTEGER,
      allowNull: false,
    },
    stock: {
      type: S.INTEGER,
      allowNull: false,
    },
    img1Url: {
      type: S.STRING,
      allowNull: false,
    },
    img2Url: {
      type: S.STRING,
    },
    snippet : {
      type : S.VIRTUAL,
      get (){
        if(this.name.length <= 30){return this.name}
        else{return this.name.slice(0, 21) + '...'}
  }
},
 snippetDesc: {
   type: S.VIRTUAL,
   get(){
     if(this.description.length <= 60){return this.description}
     else{return this.description.slice(0, 60) + '...'}
   }
 }
  },
  { sequelize: db, modelName: "product" }
);
 
module.exports = Product;
