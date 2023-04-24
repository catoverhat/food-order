import { useState } from "react";
import classes from "./Categories.module.css";

const Categories = ({ categoriesHandler }) => {
  const categories = [
    { id: 1, name: "Pasta dishes" },
    { id: 2, name: "Chicken dishes" },
    { id: 3, name: "Beef dishes" },
    { id: 4, name: "Pork dishes" },
    { id: 5, name: "Vegetarian dish" },
  ];

  return (
    <div className={classes.category}>
      {categories.map((category) => (
        <span key={category.id} onClick={categoriesHandler}>
          {category.name}
        </span>
      ))}
    </div>
  );
};

export default Categories;
