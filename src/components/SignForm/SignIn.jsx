import classes from "./SignIn.module.css";
import { useState } from "react";
import axios from "axios";
import { useSignIn } from "react-auth-kit";
import HeaderSignFormButton from "../Layout/HeaderSignFormButton";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = useSignIn();

  const signInHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "/api/signin",
        { email, password },
        { withCredentials: true },
        { headers: { "Content-Type": "application/json" } }
      );
      // console.log(response.data);
      signIn({
        token: response.data.token,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: { email: email, user: response.data.user.name, role:response.data.user.role },
      });
      alert("Login Ok");
      setEmail('')
      setPassword('')
    } catch (error) {
      alert("Login Failed");
    }
  };

  return (
    <div
      className={`${classes["form-container"]} ${
        classes["sign-in-container"]
      } ${props.onClick ? `${classes["right-panel-active"]}` : ""} `}
    >
      <form className={classes.form} action="#" onSubmit={signInHandler}>
        <h1>Sign in</h1>
        <div className={classes["social-container"]}>
          <a href="#">{/* <i class="fab fa-facebook-f"></i> */}</a>
          <a href="#">{/* <i class="fab fa-google-plus-g"></i> */}</a>
          <a href="#">{/* <i class="fab fa-linkedin-in"></i> */}</a>
        </div>
        <span>or use your account</span>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <a href="#">Forgot your password?</a>
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
