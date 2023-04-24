const express = require("express");
const router = express.Router();

// controller function
const {
  signinUser,
  signupUser,
  getUserData,
  updateUserData,
  deleteUserData,
} = require("../controllers/userController");

router.post("/signup", signupUser);
router.post("/signin", signinUser);
router.get("/account/:email", getUserData);
router.put("/account/:email", updateUserData);
router.delete("/account/:email", deleteUserData);

module.exports = router;
