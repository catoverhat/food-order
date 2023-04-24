const Menu = require("../models/menu");

exports.restMenu = async (req, res) => {
  try {
    const menus = await Menu.find({});
    res.status(200).json({ success: true, data: menus });
  } catch (error) {
    res.status(500).json({
      errors: [{ error: error.message }],
    });
  }
};

exports.getMealById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const meal = await Menu.findOne({ id: id });
    if (!meal) {
      return res.status(404).json({ errors: [{ id: "meal not found" }] });
    } else {
      res.status(200).json({
        success: true,
        data: meal,
      });
    }
  } catch (err) {
    res.status(500).json({
      errors: [{ error: err.message }],
    });
  }
};


exports.restMeals = async (req, res, next) => {
  const { id, name, description, price, tag, picture } = req.body;

  try {
    const meal = await Menu.findOne({ id: id });
    if (meal) {
      return res.status(422).json({ errors: [{ id: "id already exists" }] });
    } else {
      const newMeal = new Menu({
        id: id,
        name: name,
        description: description,
        price: price,
        tag: tag,
        picture: picture,
      });
      const response = await newMeal.save();
      res.status(200).json({
        success: true,
        result: response,
      });
    }
  } catch (err) {
    res.status(500).json({
      errors: [{ error: err.message }],
    });
  }
};

exports.updateMeal = async (req, res, next) => {
  const { id, name, description, price, tag, picture } = req.body;

  try {
    const meal = await Menu.findOne({ id: id });
    if (!meal) {
      return res.status(404).json({ errors: [{ id: "meal not found" }] });
    } else {
      const updatedMeal = await Menu.findOneAndUpdate(
        { id: id },
        {
          name: name,
          description: description,
          price: price,
          tag: tag,
          picture: picture,
        },
        { new: true }
      );

      res.status(200).json({
        success: true,
        data: updatedMeal,
      });
    }
  } catch (err) {
    res.status(500).json({
      errors: [{ error: err.message }],
    });
  }
};

exports.deleteMeal = async (req, res, next) => {
  const id = req.params.id;

  try {
    const meal = await Menu.findOne({ id: id });
    if (!meal) {
      return res.status(404).json({ errors: [{ id: "meal not found" }] });
    } else {
      await meal.deleteOne({id: id});
      res.status(200).json({
        success: true,
        message: "Meal deleted successfully",
      });
    }
  } catch (err) {
    res.status(500).json({
      errors: [{ error: err.message }],
    });
  }
};
