import {
  Box,
  Center,
  Flex,
  Skeleton,
  useMediaQuery,
  Breadcrumb,
  Spinner,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { LuHouse, LuShirt } from "react-icons/lu";
import { useSelector, useDispatch } from "react-redux";
import { loading, success, error } from "../../redux/slices/productSlice";
import { toaster } from "../../components/ui/toaster";
import ProductsContainer from "./ProductsContainer";
import ProductsPagination from "./ProductsPagination";
import Sort from "./Sort";
import "./Products.css";
import Loading from "../../components/Loading";


function Products() {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(30);
  const state = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getproduct() {
      dispatch(loading());
      try {
        let Products = await fetch(
          `https://69734d1eb5f46f8b5826cd7e.mockapi.io/api/v1/product?page=${page}&limit=20`,
        );
        Products = await Products.json();
        dispatch(dispatch(success(Products)));
      } catch (error) {
        dispatch(error());
        console.log(error);
      }
    }
    getproduct();
  }, [page]);

  function handleclick(e) {
    console.log(e.target.localName);
    if (e.target.localName == "img" || e.target.localName == "p") {
      //navigate to product details

      console.log("products details");
    } else if (e.target.localName == "svg") {
      //remove product from wishlist
      return toaster.create({
        title: `Move to wishlist`,
        type: "success",
      });
    } else {
      // move to cart
      return toaster.create({
        title: `Added to cart`,
        type: "success",
      });
    }
  }

  return (
    <Box>
      {/* <Box pos="absolute" inset="0" >
        <Center h="100vh">
          <Spinner color="teal.500" />
        </Center>
      </Box> */}

     

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
          
          <Box className="products" onClick={(e) => handleclick(e)}>
            {state.loading
              ? <Loading/>
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
