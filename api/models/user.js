const mongoose = require("mongoose");
const { Schema } = mongoose;
const validator = require("validator");

const userSchema = new Schema(
  {
    name: { type: String, trim: true },
    lastName: { type: String, trim: true },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email incorrecto");
        }
      },
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      trim: true,
      minlenght: [8, "Minimo caracteres"],
      validate(value) {
        if (value.includes("12345678")) {
          throw new Error("Password no permitido");
        }
        if (!validator.isStrongPassword(value)) {
          throw Error("Password not strong enough");
        }
      },
    },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    address: {
      number: { type: String, trim: true, default: "" },
      street: { type: String, trim: true, default: "" },
      sector: { type: String, trim: true, default: "" },
      postalCode: { type: String, trim: true, default: "" },
    },
  },
  {
    timestamps: true,
    collection: "users",
  }
);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
