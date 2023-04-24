import { Fragment } from "react";

import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

const Meals = ({ category }) => {
  return (
    <Fragment>
      {/* <MealsSummary /> */}
      <AvailableMeals category={category} />
    </Fragment>
  );
};

export default Meals;
