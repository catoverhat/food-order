import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

const AvailableMeals = ({ category }) => {
  const [mealsList, setMealsList] = useState([]);
  useEffect(() => {
    const getMenu = async () => {
      try {
        const response = await axios.get("/api/menu");

        if (response.status === 200) {
          const allMeals = await response.data.data;
          const meals = [];
          allMeals.forEach((element) => {
            if (element.tag === category) {
              meals.push(element);
            }
          });
          const mealsList = meals.map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              description={meal.description}
              price={+meal.price}
              tag={meal.tag}
              picture={meal.picture}
            />
          ));

          setMealsList(mealsList);
        } else {
          throw new Error("Failed to get menu data");
        }
      } catch (error) {
        console.error(error);
      }
    };

    getMenu();
  }, [category]);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
