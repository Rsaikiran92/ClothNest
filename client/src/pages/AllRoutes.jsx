import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile/Profile";
import Cart from "./Cart/Cart";
import Wishlist from "./Wishlist";


function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
  );
}

export default AllRoutes;
