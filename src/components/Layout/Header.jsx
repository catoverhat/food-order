import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

import DropdownButton from "./Dropdown";
import { DUMMY_MEALS } from "../../App";

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <div className={classes["left-side"]}>
                    <DropdownButton
                        margin={classes.sort}
                        array={DUMMY_MEALS}
                        food={props.food}
                        setFood={props.setFood}
                    ></DropdownButton>
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
