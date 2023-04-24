import classes from "./SignFormOverlay.module.css";

const SignFormOverlay = (props) => {

  const rightPanelActive = props.panel
    ? `${classes["right-panel-active"]}`
    : "";

  return (
    <div className={`${classes["overlay-container"]} ${rightPanelActive}`}>
      <div className={`${classes.overlay} ${rightPanelActive}`}>
        <div
          className={`${classes["overlay-panel"]} ${classes["overlay-left"]} ${rightPanelActive}`}
        >
          <h1>Welcome Back!</h1>
          <p>To keep connected with us please login with your personal info</p>
          <button
            type="button"
            className={classes.ghost}
            onClick={props.deactivatedPanel}
          >
            Sign In
          </button>
        </div>
        <div
          className={`${classes["overlay-panel"]} ${classes["overlay-right"]} ${rightPanelActive}`}
        >
          <h1>Hello, Friend!</h1>
          <p>Enter your personal details and start eating with us</p>
          <button
            type="button"
            className={classes.ghost}
            onClick={props.activatedPanel}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignFormOverlay;
