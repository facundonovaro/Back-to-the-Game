// import { findUsers } from "../controllers/userControllers";
// router.get("/", findUsers());
const express = require("express");
const router = express.Router();
const passport = require('passport');


router.post("/users/login", passport.authenticate('local'), (req, res, next) => {
    res.status(201).send(req.user)
});

router.post("/users/logout", (req, res, next) => {
    if (req.isAuthenticated()) {
        req.logOut()
    }
    res.status(201).send('DESLOGEADO');
});


module.exports = router