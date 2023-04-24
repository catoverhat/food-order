import { Fragment, useState } from "react";
import Header from "../Layout/Header";
import Meals from "../Meals/Meals";
import Cart from "../Cart/Cart";
import CartProvider from "../../store/CartProvider";
import SignForm from "../SignForm/SignForm";
import Carousel from "../Layout/Carousel";
import classes from "./IndexPage.module.css";
import Categories from "../UI/Categories";

const IndexPage = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [signFormIsShown, setSignFormIsShown] = useState(false);
  const [category, setCategory] = useState("Beef dishes");

  const categoriesHandler = (event) => {
    setCategory(event.target.innerText);
  };

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const showSignFormHandler = () => {
    setSignFormIsShown(true);
  };

  const hideSignFormHandler = () => {
    setSignFormIsShown(false);
  };

  return (
    <div className={classes.body}>
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        {signFormIsShown && <SignForm onClose={hideSignFormHandler} />}
        <Header
          onShowCart={showCartHandler}
          onShowSignForm={showSignFormHandler}
        />
        <Categories categoriesHandler={categoriesHandler} />
        <main className={classes.main}>
          <Carousel />
          <Meals category={category} />
        </main>
      </CartProvider>
    </div>
  );
};

export default IndexPage;
