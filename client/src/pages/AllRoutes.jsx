import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Profile from "./Profile/Profile";
import Cart from "./Cart/Cart";
import Wishlist from "./Wishlist/Wishlist";
import Products from "./Product/Products";
import Errorpage from "../components/Errorpage";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/:products" element={<Products />} />
      <Route path="*" element={<Errorpage />} />
    </Routes>
  );
}

export default AllRoutes;
