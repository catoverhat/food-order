const mongoose = require("mongoose");
const { Schema } = mongoose;

const menuSchema = new Schema(
  {
    id: {
      type: String,
      required: [true, "id para el plato necesario ex:(m1)"],
      trim: true,
    },
    name: {
      type: String,
      required: [true, "name para el plato necesario ex:(sushi)"],
      trim: true,
    },
    description: {
      type: String,
      required: [
        true,
        "description para el plato necesario ex:(Finest fish and veggies)",
      ],
      trim: true,
    },
    price: {
      type: String,
      required: [true, "price para el plato necesario ex:(22.99)"],
      trim: true,
    },
    tag: {
      type: String,
      required: [true, "tag para el plato necesario ex:(Pasta dishes, Chicken dishes)"],
      trim: true,
    },
    picture: {
      type: String,
      required: [true, "picture para el plato necesario ex:(https://drive.google.com/uc?export=view&id=)"],
      trim: true,
    },
  },
  {
    timestamps: true,
    collection: "menu",
  }
);

const menuModel = mongoose.model("Menu", menuSchema);

module.exports = menuModel;
