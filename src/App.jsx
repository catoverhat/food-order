import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import SignForm from "./components/SignForm/SignForm";

export const DUMMY_MEALS = [
    {
        id: "m1",
        name: "Sushi",
        description: "Finest fish and veggies",
        price: 22.99,
    },
    {
        id: "m2",
        name: "Schnitzel",
        description: "A german specialty!",
        price: 16.5,
    },
    {
        id: "m3",
        name: "Barbecue Burger",
        description: "American, raw, meaty",
        price: 12.99,
    },
    {
        id: "m4",
        name: "Green Bowl",
        description: "Healthy...and green...",
        price: 18.99,
    },
];

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);
    //Creando el array de objetos con el que seteare los estados
    const shownStates = DUMMY_MEALS.map((food) => {
        return {
            id: food.id,
            shownState: false,
        };
    });
    //Creando los estados con el array de objetos que hice anteriormente, se lo pasamos a cada componente para poder usarlos donde lo necesitemos
    const [food, setFood] = useState(shownStates);

    const showCartHandler = () => {
        setCartIsShown(true);
    };

    const hideCartHandler = () => {
        setCartIsShown(false);
    };

    return (
        <CartProvider>
            {cartIsShown && <Cart onClose={hideCartHandler} />}
            <Header
                onShowCart={showCartHandler}
                food={food}
                setFood={setFood}
            />
            <main>
                <Meals food={food} />
            </main>
        </CartProvider>
    );
}

export default App;
