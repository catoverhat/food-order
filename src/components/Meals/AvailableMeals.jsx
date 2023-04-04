import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useState } from "react";
import { DUMMY_MEALS } from "../../App";

const AvailableMeals = ({ food }) => {
    //Creando array con los objetos del array de estados food que tengan un shownState de true
    const someStateTrue = food.filter((obj) => obj.shownState === true);

    //Array que filtrara los objetos (de DUMMY_MEALS) que hay en él que sean igual al id del (unico) item que hay en someStateTrue solo en caso de que someStateTrue tenga algo diferente de 0, es decir, solo tendra algo si hay algun estado true
    const stateTrueShown = DUMMY_MEALS.filter((obj) => {
        if (someStateTrue.length !== 0) {
            return obj.id === someStateTrue[0].id;
        }
    });

    //Componente condicional, el cual, si someStateTrue no tiene items, sera igual a un grupo de componentes que se crearan basados en el array de objetos DUMMY_MEALS, en caso de que someStateTrue SI tenga items, devolvera un componente basado en el unico objeto que hay en stateTrueShown
    const mealsList =
        someStateTrue.length === 0
            ? DUMMY_MEALS.map((meal) => (
                  <MealItem
                      key={meal.id}
                      id={meal.id}
                      name={meal.name}
                      description={meal.description}
                      price={meal.price}
                  />
              ))
            : stateTrueShown.map((meal) => (
                  <MealItem
                      key={meal.id}
                      id={meal.id}
                      name={meal.name}
                      description={meal.description}
                      price={meal.price}
                  />
              ));

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;
