import { Fragment } from "react";

import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

const Meals = ({ food }) => {
    return (
        <Fragment>
            <MealsSummary />
            <AvailableMeals food={food} />
        </Fragment>
    );
};

export default Meals;
