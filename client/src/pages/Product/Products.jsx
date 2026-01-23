import { Box, Center, Flex, Skeleton, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useReducer } from "react";
import ProductsContainer from "./ProductsContainer";
import "./Products.css";
import { useParams } from "react-router-dom";
import { Breadcrumb } from "@chakra-ui/react";
import { LuHouse, LuShirt } from "react-icons/lu";
import Sort from "./Sort";
import ProductsPagination from "./ProductsPagination";
import { useState } from "react";

async function getproduct(dispatch, page) {
  dispatch({ type: "loading" });
  try {
    let Products = await fetch(
      `https://69734d1eb5f46f8b5826cd7e.mockapi.io/api/v1/product?page=${page}&limit=20`,
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
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(30);
 

  useEffect(() => {
    getproduct(dispatch, page);
  }, [page]);

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

      <Box className="sort_filter_container">
        <Box w={"20%"} borderRight={"1px solid #ebebeb"}>
          Filters
        </Box>
        <Flex w={"80%"} justifyContent={"space-between"} alignItems={"center"}>
          <Box>Clothes for Men</Box>
          <Sort />
        </Flex>
      </Box>

      <Box className="products_container">
        <Box w={"20%"}></Box>
        <Box w={"80%"}>
          
          <Box className="products">
            {state.loading
              ? new Array(count).fill(0).map((i) => <Skeleton height="206px" />)
              : state.data.map((item) => (
                  <ProductsContainer item={item}></ProductsContainer>
                ))}
          </Box>

          <Center>
            <ProductsPagination page={page} setPage={setPage} count={count} />
          </Center>

        </Box>
      </Box>
    </Box>
  );
}

export default Products;
