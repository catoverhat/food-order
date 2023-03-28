import SignUp from "./SignUp";
import SignIn from "./SignIn";
import SignFormOverlay from "./SignFormOverlay";
import Modal from "../UI/Modal";
import classes from "./SignForm.module.css";
import { useState } from "react";

const SignForm = (props) => {
  const [panelIsActivated, setPanelIsActivated] = useState(false);

  const activatedPanelhandler = () => {
    setPanelIsActivated(true);
  };

  const deactivatedPanelhandler = () => {
    setPanelIsActivated(false);
  };

  return (
    <Modal onClose={props.onClose}>
      <div className={classes.container}>
        <SignUp onClick={panelIsActivated} />
        <SignIn onClick={panelIsActivated} />
        <SignFormOverlay
          activatedPanel={activatedPanelhandler}
          panel={panelIsActivated}
          deactivatedPanel={deactivatedPanelhandler}
        />
      </div>
    </Modal>
  );
};
export default SignForm;
