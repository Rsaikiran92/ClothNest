import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useReducer } from "react";
import ProductsContainer from "./ProductsContainer";
import "./Products.css";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "@chakra-ui/react"
import { LuHouse, LuShirt } from "react-icons/lu"
import Sort from "./Sort";

async function getproduct(dispatch) {
  dispatch({ type: "loading" });
  try {
    let Products = await fetch(
      "https://purplebackend.onrender.com/products/shampoo"
    );
    Products = await Products.json();
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

function Products() {
  const [state, dispatch] = useReducer(reducer, initial);
  const param = useParams();
  console.log(param);

  useEffect(() => {
    getproduct(dispatch);
  }, []);

  return (
    <Box>
      <Breadcrumb.Root>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="/">
              <LuHouse />
              Home
            </Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />

          <Breadcrumb.Item>
            <Breadcrumb.Link href="#">
              <LuShirt />
              Men Wear
            </Breadcrumb.Link>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>

      <Box className="sort_filter_container" >
        <Box w={"20%"} borderRight={"1px solid #ebebeb"}>Filters</Box>
        <Flex w={"80%"} justifyContent={"space-between"} alignItems={"center"}>
         <Box>Clothes for Men</Box>
         <Sort/>
        </Flex>
      </Box>

      <Box className="products_container">
        <Box w={"20%"}></Box>
        <Flex w={"80%"}>
          <Box></Box>
          <Box className="products">
            {state.data.map((item) => (
              <ProductsContainer item={item}></ProductsContainer>
            ))}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Products;
