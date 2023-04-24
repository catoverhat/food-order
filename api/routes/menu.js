const express = require("express");
const router = express.Router();

// controller function
const {
  restMenu,
  restMeals,
  updateMeal,
  deleteMeal,
  getMealById,
} = require("../controllers/menuController");

// menu route
router.get("/menu", restMenu);
router.post("/menu", restMeals);
router.put("/menu/:id", updateMeal);
router.delete("/menu/:id", deleteMeal);
router.get("/menu/:id", getMealById);

module.exports = router;
