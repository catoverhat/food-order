const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { createJWT } = require("../utils/auth");

const emailRegexp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

exports.signupUser = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });
    if (user) {
      return res
        .status(422)
        .json({ errors: [{ user: "email already exists" }] });
    } else {
      const bcryptSalt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, bcryptSalt);
      const newUser = new User({
        name: name,
        email: email,
        password: hash,
      });
      const response = await newUser.save();
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

const ACCESS_TOKEN_DURATION = 3600;

exports.signinUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        errors: [{ email: "User not found" }],
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ errors: [{ password: "Incorrect password" }] });
    }

    const access_token = createJWT(user.email, user._id, ACCESS_TOKEN_DURATION);
    const decoded = await jwt.verify(access_token, process.env.TOKEN_SECRET);
    return res.status(200).json({
      success: true,
      token: access_token,
      user: user,
    });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ errors: [{ message: "Internal server error" }] });
  }
};

exports.getUserData = async (req, res, next) => {
  const { email } = req.params;

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ errors: [{ email: "email not found" }] });
    } else {
      res.status(200).json({
        success: true,
        user: user,
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

exports.updateUserData = async (req, res, next) => {
  const {
    name,
    lastName,
    role,
    address: { number, street, sector, postalCode },
  } = req.body;
  const email = req.params.email;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ errors: [{ email: "email not found" }] });
    } else {
      const response = await User.findOneAndUpdate(
        { email: email },
        {
          name,
          lastName,
          role,
          address: { number, street, sector, postalCode },
        },
        { new: true }
      );

      res.status(200).json({
        success: true,
        user: response,
      });
    }
  } catch (err) {
    res.status(500).json({
      errors: [{ error: err.message }],
    });
  }
};

exports.deleteUserData = async (req, res, next) => {
  const email = req.params.email;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ errors: [{ email: "email not found" }] });
    } else {
      await User.findOneAndDelete({ email: email });
      res.status(200).json({
        success: true,
        message: "User data deleted successfully",
      });
    }
  } catch (err) {
    res.status(500).json({
      errors: [{ error: err.message }],
    });
  }
};
