import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Profile from "./Profile/Profile";
import Cart from "./Cart/Cart";
import Wishlist from "./Wishlist/Wishlist";
import Products from "./Product/Products";
import Errorpage from "../components/Errorpage";
import NetworkError from "./InternetError/InternetError";
import NetworkCheck from "../components/NetworkCheck";
import MainLayout from "./MainLayout";
import Login from "./Login.jsx/Login";
import ProductDetails from "./Product/ProductDetails";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/network-error" element={<NetworkError />} />
      <Route path="/login" element={<Login/>} />
      <Route element={<MainLayout />}>
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
          path="/:products/:id"
          element={
            <NetworkCheck>
              <ProductDetails />
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
      </Route>
    </Routes>
  );
}

export default AllRoutes;
