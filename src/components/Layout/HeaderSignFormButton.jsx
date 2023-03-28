import LoginIcon from "../SignForm/SignFormIcon";
import classes from "./HeaderSignFormButton.module.css";

const HeaderSignFormButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      {/* <div>Daniel</div> */}
      <LoginIcon />
    </button>
  );
};

export default HeaderSignFormButton;
