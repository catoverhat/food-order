import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import LoginButton from "../Login/LoginButton";
import DropdownButton from "./Dropdown";
import { DUMMY_MEALS } from "../Meals/AvailableMeals";

const Header = (props) => {
    return (
        <Fragment>
            <div>
                <header className={classes.header}>
                    <h1>ReactMeals</h1>
                    <div className={classes["left-side"]}>
                        <DropdownButton
                            margin={classes.sort}
                            array={DUMMY_MEALS}
                        ></DropdownButton>
                        <LoginButton />
                        <HeaderCartButton onClick={props.onShowCart} />
                    </div>
                </header>
            </div>

            <div className={classes["main-image"]}>
                <img src={mealsImage} alt="A table full of delicious food!" />
            </div>
        </Fragment>
    );
};

export default Header;
