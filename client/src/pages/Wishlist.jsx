import { Box, Button ,CloseButton,Skeleton,SkeletonCircle,Text} from "@chakra-ui/react";
import { useEffect, useReducer } from "react";
import { IoCloseSharp } from "react-icons/io5"
import "./Wishlist.css"

async function getproduct(dispatch) {
  dispatch({ type: "loading" });
  try {
    let Products = await fetch(
      "https://purplebackend.onrender.com/products/shampoo"
    );
    Products = await Products.json();
    console.log(Products)
    dispatch({ type: "success", payload: Products });
  } catch (error) {
    dispatch({ type: "error" });
    console.log(error);
  }
}

const initial = {
  loading: false,
  data: [],
  error: false,
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "loading":
      return { ...state, loading: true };
    case "success":
      return { ...state, loading: false, data: action.payload };
    case "error":
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}

function Wishlist() {
  const [state, dispatch] = useReducer(reducer, initial);

  useEffect(() => {
    getproduct(dispatch);
  }, []);

  function handleclick(e){
    if(e.target.localName=="img" || e.target.localName=="p"){
        //navigate to product details
        console.log("products details")
    }else if(e.target.localName=="svg"){
        //remove product from wishlist
        console.log("remove product")
    }else{
        // move to cart
        console.log("move to cart")
    }
  }

  return (
    <Box className="wishlist_container">
      <Box>My Wishlist  items</Box>
      <Box className="wishlist_products">
        {state.loading?new Array(30).fill(0).map((i)=><Skeleton  height="200px" /> ):
        state.data.map((item) => (
          <Box key={item.id} onClick={(e)=>handleclick(e)}>
            <img src={item.image} />
            <Box className="close_btn"><IoCloseSharp /></Box>
            
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
