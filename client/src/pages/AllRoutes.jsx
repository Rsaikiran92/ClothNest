import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Profile from "./Profile/Profile";
import Cart from "./Cart/Cart";
import Wishlist from "./Wishlist/Wishlist";
import Products from "./Product/Products";
import Errorpage from "../components/Errorpage";
import NetworkError from "./InternetError/InternetError";
import NetworkCheck from "../components/NetworkCheck";
import FooterBar from "../components/FooterBar";
import Footer from "../components/Footer";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/network-error" element={<NetworkError />} />
      <Route
        path="/"
        element={
          <NetworkCheck>
            <Home />
          </NetworkCheck>
        }
      />
      <Route
        path="/profile"
        element={
          <NetworkCheck>
            <Profile />
          </NetworkCheck>
        }
      />
      <Route
        path="/cart"
        element={
          <NetworkCheck>
            <Cart />
          </NetworkCheck>
        }
      />
      <Route
        path="/wishlist"
        element={
          <NetworkCheck>
            <Wishlist />
          </NetworkCheck>
        }
      />
      <Route
        path="/:products"
        element={
          <NetworkCheck>
            <Products />
          </NetworkCheck>
        }
      />
      <Route
        path="*"
        element={
          <NetworkCheck>
            <Errorpage />
          </NetworkCheck>
        }
      />
    </Routes>
  );
}

export default AllRoutes;
