import { Fragment, useState, useEffect, useRef } from "react";
import SignFormIcon from "../SignForm/SignFormIcon";
import classes from "./HeaderSignFormButton.module.css";
import { Link } from "react-router-dom";
import { useIsAuthenticated, useSignOut, useAuthUser } from "react-auth-kit";

const HeaderSignFormButton = (props) => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const isAuthenticated = useIsAuthenticated();
  const signOut = useSignOut();
  const auth = useAuthUser()

  const toggleDropdownHandler = () => {
    setDropdownIsOpen(!dropdownIsOpen);
  };

  const signOutHandler = () => {
    signOut();
  };


  useEffect(() => {
    const handleWindowClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownIsOpen(false);
      }
    };

    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  return (
    <div className={classes.dropdown} ref={dropdownRef}>
       {isAuthenticated() ? <div className={classes.name}>Hola, {auth().user}</div>: ''}
      <button className={classes.button} onClick={toggleDropdownHandler}>
        <SignFormIcon />
      </button>
      
      <div
        className={`${classes["dropdown-content"]} ${
          dropdownIsOpen ? `${classes.active}` : ""
        }`}
      >
        <Link className={`${classes.link} ${classes.userInfo}`} to={"/user"} />
        {isAuthenticated() ? (
          <Link className={`${classes.link}`} onClick={signOutHandler}>
            Sign Out
          </Link>
        ) : (
          <Link
            className={`${classes.link} ${classes.signIn}`}
            onClick={props.onClick}
          />
        )}
      </div>
    </div>
  );
};

export default HeaderSignFormButton;
