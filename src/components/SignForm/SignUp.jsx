import classes from "./SignUp.module.css";

const SignUp = (props) => {
  return (
    <div
      className={`${classes["form-container"]} ${
        classes["sign-up-container"]
      } ${props.onClick ? `${classes["right-panel-active"]}` : ""} `}
    >
      <form className={classes.form} action="#">
        <h1>Create Account</h1>
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
        <span>or use your email for registration</span>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
