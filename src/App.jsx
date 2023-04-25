import { Routes, Route } from "react-router-dom";
import axios from "axios";
import IndexPage from "./components/Pages/IndexPage";
import CheckoutPage from "./components/Pages/CheckoutPage";
import UserAccount from "./components/Pages/UserAccount";
import MenuPage from "./components/Pages/MenuPage";
import AboutUs from "./components/Pages/AboutUs";
import ContactUs from "./components/Pages/ContactUs";
import { RequireAuth } from "react-auth-kit";

axios.defaults.baseURL = "http://127.0.0.1:4000";

function App() {
  return (
    <Routes>
      <Route index element={<IndexPage />} />
      {/* <Route path="/checkout" element={<CheckoutPage />} /> */}
      {/* <Route path="/user" element={<UserAccount />} /> */}
      <Route
        path="/user"
        element={
          <RequireAuth loginPath="/">
            <UserAccount />
          </RequireAuth>
        }
      />

      <Route
        path="/checkout"
        element={
          <RequireAuth loginPath="/">
            <CheckoutPage />
          </RequireAuth>
        }
      />
      <Route
        path="/menu"
        element={
          <RequireAuth loginPath="/">
            <MenuPage />
          </RequireAuth>
        }
      />
      {/* <Route path="/menu" element={<MenuPage />}></Route> */}
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  );
}

export default App;
