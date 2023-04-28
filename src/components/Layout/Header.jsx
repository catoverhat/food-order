import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderSignFormButton from "./HeaderSignFormButton";
import MealSearch from "./Search";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <MealSearch/>
        <div className={classes["left-side"]}>
          
          <HeaderSignFormButton onClick={props.onShowSignForm} />
          <HeaderCartButton onClick={props.onShowCart} />
        </div>
       
      </header>
      
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
      
    </Fragment>
    


  );
};


export default Header;
