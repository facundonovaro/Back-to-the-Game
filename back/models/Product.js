const S = require("sequelize");
const db = require("../config/db");

class Product extends S.Model {}

Product.init(
  {
    name: {
      type: S.STRING,
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
        if (this.name && this.name.length <= 20) { return  this.name}
        else if(this.name) { return this.name.slice(0, 21) + '...'}
        else return ;
  }
},
 snippetDesc: {
   type: S.VIRTUAL,
   get(){
     if (this.getDataValue('description')&&this.getDataValue('description').length <= 60) { return this.getDataValue('description')}
     else if (this.getDataValue('description')) { return this.getDataValue('description').slice(0, 60) + '...'}
     else return ;
   }
 }
  },
  { sequelize: db, modelName: "product" }
);
 
module.exports = Product;
