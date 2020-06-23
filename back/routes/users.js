
const express = require("express");
const router = express.Router();
const passport = require('passport');
const  {registerUser, userLogin, userLogout} = require('../controllers/userControllers')


router.post("/register", registerUser);

router.post("/login", passport.authenticate('local'),userLogin )

router.post("/logout", userLogout)

module.exports = router