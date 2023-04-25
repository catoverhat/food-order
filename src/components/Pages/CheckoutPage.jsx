import { useState, useEffect } from "react";
import classes from "./CheckoutPage.module.css";
import { CreditCardValidator } from "../utils/CreditCardValidator";
import { ExpirationDateValidator } from "../utils/ExpirationDateValidator";
import SubHeader from "../Layout/SubHeader";
import { useLocation } from "react-router-dom";
import { useAuthUser } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CheckoutPage = () => {
  const [userData, setUserData] = useState("");
  const [creditCardType, setCreditCardType] = useState("");
  let location = useLocation();
  const auth = useAuthUser();
  const navigate = useNavigate();

  const images = {
    Visa: "https://seeklogo.com/images/V/visa-logo-6F4057663D-seeklogo.com.png",
    MasterCard:
      "https://seeklogo.com/images/M/Master_Card-logo-027CB51F96-seeklogo.com.png",
    "American Express":
      "https://seeklogo.com/images/A/american-express-logo-EDF87C04A0-seeklogo.com.png",
    Maestro:
      "https://seeklogo.com/images/M/Maestro-logo-333A576204-seeklogo.com.png",
    "Visa Electron":
      "https://seeklogo.com/images/V/VISA_Electron-logo-3B6D415881-seeklogo.com.png",
  };

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await axios.get(`/api/account/${auth().email}`);

        if (response.status === 200) {
          const userData = await response.data.user;
          setUserData(userData);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getUserData();
  }, []);

  // console.log(name.number)

  const cardCheckHandler = (event) => {
    const value = event.target.value;
    const { isValid, cardType } = CreditCardValidator(value);
    setCreditCardType(isValid ? cardType : "");
    // Add validation state to update input style
    const input = event.target;
    if (isValid) {
      input.classList.remove(classes.invalid);
    } else {
      input.classList.add(classes.invalid);
    }
  };

  const expirationDateHandler = (event) => {
    const [year, month] = event.target.value.split("-");
    const isValid = ExpirationDateValidator(month, year);
    // setExpirationDate(isValid);

    // Add validation state to update input style
    const input = event.target;
    if (isValid) {
      input.classList.remove(classes.invalid);
    } else {
      input.classList.add(classes.invalid);
    }
  };

  const ordenarHandler = (event) => {
    event.preventDefault();
    alert("Order en proceso");
    navigate("/");
  };

  // console.log(userData.name)

  return (
    <div className={classes.body}>
      <SubHeader />
      <div className={classes.checkout}>
        <form className={classes.container} onSubmit={ordenarHandler}>
          <div className={classes.userDataInfo}>
            <span>Nombre: {`${userData.name} ${userData.lastName}`}</span>
            {userData.address ? (
              <p>
                Dirección:
                {` ${userData.address.street} #${userData.address.number}, ${userData.address.sector}, ${userData.address.postalCode}`}
              </p>
            ) : null}
          </div>
          <div className={classes["resumen-factura"]}>
            <h1>Orden</h1>
            <div className={classes.items}>
              <span>Amount</span>
              <span>Meal</span>
              <span>Price</span>
            </div>

            {location.state.items.map((item, index) => (
              <div className={classes.items} key={index}>
                <span>{item.amount}</span>
                <span>{item.name}</span>
                <span>{item.price}</span>
              </div>
            ))}

            <div className={classes.total}>
              <h3>Total</h3>
              <h3>${location.state.total}</h3>
            </div>
          </div>
          <div className={classes["pago-container"]}>
            <h3>Metodo de pago</h3>
            <fieldset className={classes.fieldset}>
              <input
                type="radio"
                name="metodoPago"
                defaultChecked
                id="tarjeta"
              />
              <label htmlFor="tarjeta">Tarjeta</label>
              <input type="radio" name="metodoPago" id="efectivo" />
              <label htmlFor="efectivo">Pago Efectivo</label>
            </fieldset>
            <div className={classes.tarjeta}>
              <div className={classes["nombre-numero"]}>
                <p>Nombre en la tarjeta</p>
                <input
                  type="text"
                  placeholder="John Doe"
                  onInput={(event) => {
                    event.target.value = event.target.value.replace(
                      /[^A-Za-z\s]/gi,
                      ""
                    );
                  }}
                />
                <p>Numero en la tarjeta</p>
                <input type="number" onChange={cardCheckHandler} />
                {images[creditCardType] ? (
                  <img src={images[creditCardType]} alt={creditCardType}></img>
                ) : null}
              </div>
              <div className={classes["botton-card"]}>
                <div className={classes.fecha}>
                  <label htmlFor="fecha">Fecha de expiracion</label>
                  <input
                    type="Month"
                    id="fecha"
                    onChange={expirationDateHandler}
                  />
                </div>
                <div className={classes.cvv}>
                  <label htmlFor="cvv">CVV</label>
                  <input type="number" id="cvv" maxLength={3} />
                </div>
              </div>
            </div>
            <button className={classes.button}>Ordenar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
