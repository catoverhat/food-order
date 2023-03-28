import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import SignForm from "./components/SignForm/SignForm";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [signFromIsShown, setSignFormIsShown] = useState(false);

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
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      {signFromIsShown && <SignForm onClose={hideSignFormHandler} />}
      <Header
        onShowCart={showCartHandler}
        onShowSignForm={showSignFormHandler}
      />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
