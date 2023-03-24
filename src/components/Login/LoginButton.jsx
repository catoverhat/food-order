import LoginIcon from "./LoginIcon";
import classes from './LoginButton.module.css'

const LoginButton = () => {
  return (
    <button className={classes['login-button']}>
     
        <LoginIcon />

      
    </button>
  );
};

export default LoginButton;
