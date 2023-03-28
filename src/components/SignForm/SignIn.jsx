import classes from "./SignIn.module.css";

const SignIn = (props) => {
  return (
    <div
      className={`${classes["form-container"]} ${
        classes["sign-in-container"]
      } ${props.onClick ? `${classes["right-panel-active"]}` : ""} `}
    >
      <form className={classes.form} action="#">
        <h1>Sign in</h1>
        <div className={classes["social-container"]}>
          <a href="#">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i class="fab fa-google-plus-g"></i>
          </a>
          <a href="#">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
        <span>or use your account</span>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <a href="#">Forgot your password?</a>
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
