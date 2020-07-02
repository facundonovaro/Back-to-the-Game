const express = require("express");
const router = express.Router();
const passport = require("passport");
const {
  registerUser,
  userLogin,
  userLogout,
  userCookie,
  findAllUsers,
  findSingleUser,
  editUser,
  deleteUser,
} = require("../controllers/userControllers");

router.post("/register", registerUser);

router.post("/login", passport.authenticate("local"), userLogin);

router.post("/logout", userLogout);

router.get("/cookieuser", userCookie);

router.get("/admin/:id", findSingleUser);

router.patch("/admin/:id", editUser);

router.get("/admin", findAllUsers);

router.delete("/admin/:id", deleteUser);

module.exports = router;
