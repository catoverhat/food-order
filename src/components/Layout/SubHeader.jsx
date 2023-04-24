import { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./SubHeader.module.css";

const SubHeader = () => {
  return (
    <nav className={classes.navBar}>
      <Link className={classes.logo}></Link>
      <div className={classes["nav-links"]}>
        <Link>About Us</Link>
        <Link>Contact Us</Link>
      </div>
    </nav>
  );
};

export default SubHeader;
