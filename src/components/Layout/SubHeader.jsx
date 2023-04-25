import { Link } from "react-router-dom";
import classes from "./SubHeader.module.css";

const SubHeader = () => {
  return (
    <nav className={classes.navBar}>
      <Link className={classes.logo} to={'/'}></Link>
      <div className={classes["nav-links"]}>
        <Link to={"/about"}>About Us</Link>
        <Link to={"/contact"}>Contact Us</Link>
      </div>
    </nav>
  );
};

export default SubHeader;
