import { useState } from "react";
import classes from "./SignUp.module.css";
import axios from "axios";

const SignUp = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignUpHandler = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/api/signup", {
        name,
        email,
        password,
      });

      alert("Registration successsful. Now you can sign in");
      setName('')
      setEmail('')
      setPassword('')
    } catch (error) {
      alert("Registration failed. Email already in use.");
    }
  };

  return (
    <div
      className={`${classes["form-container"]} ${
        classes["sign-up-container"]
      } ${props.onClick ? `${classes["right-panel-active"]}` : ""} `}
    >
      <form className={classes.form} action="#" onSubmit={SignUpHandler}>
        <h1>Create Account</h1>
        <div className={classes["social-container"]}>
          <a href="#">{/* <i class="fab fa-facebook-f"></i> */}</a>
          <a href="#">{/* <i class="fab fa-google-plus-g"></i> */}</a>
          <a href="#">{/* <i class="fab fa-linkedin-in"></i> */}</a>
        </div>
        <span>or use your email for registration</span>
        <input
          type="text"
          placeholder="John Doe"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
