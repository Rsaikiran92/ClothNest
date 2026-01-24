import {
  Box,
  Button,
  CloseButton,
  Skeleton,
  SkeletonCircle,
  Text,
} from "@chakra-ui/react";
import {  toaster  } from "../components/ui/toaster"
import { useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { loading, success, error } from "../redux/slices/wishlistSlice";
import "./Wishlist.css";
import { useSelector, useDispatch } from "react-redux";

async function getwishlist(dispatch) {
  dispatch(loading());
  try {
    let Products = await fetch(
      "https://69734d1eb5f46f8b5826cd7e.mockapi.io/api/v1/cart",
    );
    Products = await Products.json();
    dispatch(success(Products));
  } catch (error) {
    dispatch(error());
    console.log(error);
  }
}

function Wishlist() {
  const state = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  useEffect(() => {
    getwishlist(dispatch);
  }, []);

  function handleclick(e) {
    if (e.target.localName == "img" || e.target.localName == "p") {
      //navigate to product details
      
      console.log("products details");
    } else if (e.target.localName == "svg") {
      //remove product from wishlist
      return toaster.create({
        title: `Remove form wishlist`,
        type: "success",
      });
      console.log("remove product");
    } else {
      // move to cart
      return toaster.create({
        title: `move to cart`,
        type: "success",
      });
      console.log("move to cart");
    }
  }

  return (
    <Box className="wishlist_container">
      <Box>My Wishlist items</Box>
      <Box className="wishlist_products">
        {state.loading
          ? new Array(30).fill(0).map((i) => <Skeleton height="200px" />)
          : state.data.map((item) => (
              <Box key={item.id} onClick={(e) => handleclick(e)}>
                <img src={item.image} />
                <Box className="close_btn">
                  <IoCloseSharp />
                </Box>

                <Text>{item.product_name}</Text>
                <Text>Rs.{item.price}</Text>
                <Box className="cart_btn">MOVE TO CART</Box>
              </Box>
            ))}
      </Box>
    </Box>
  );
}

export default Wishlist;
