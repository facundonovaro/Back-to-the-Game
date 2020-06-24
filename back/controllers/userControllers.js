const User = require("../models/User"); 

const registerUser = (req,res) =>{
User.create(req.body).then((user) => res.status(200).send(user));
}

const userLogin = (req,res)=>{
 res.status(201).send(req.user)
}

const userLogout = (req,res) => {

       req.logOut();
    
     res.status(201).send("DESLOGEADO");
}

const userCookie = (req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user);
  }
  else {res.json({})}
};



module.exports = {registerUser,userLogin, userLogout, userCookie}