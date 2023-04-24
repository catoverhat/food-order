import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderSignFormButton from "./HeaderSignFormButton";
import { Link } from "react-router-dom";
import { useIsAuthenticated, useAuthUser } from "react-auth-kit";

const Header = (props) => {
  const isAuthenticated = useIsAuthenticated();
  const auth = useAuthUser()
  // console.log(auth().role)
  return (
    <Fragment>
      <header className={classes.header}>
        <Link className={classes.logo} to={"/"}></Link>
        <Link className={classes.link} to={"/about"}>About Us</Link>
        <Link className={classes.link} to={"/contact"}>Contact Us</Link>
        {isAuthenticated() && auth().role === 'admin'? <Link className={classes.link} to={"/menu"}>Menu</Link> : null}
        <div className={classes["left-side"]}>
          <HeaderSignFormButton onClick={props.onShowSignForm} />
          <HeaderCartButton
            onClick={isAuthenticated() ? props.onShowCart : null}
          />
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
