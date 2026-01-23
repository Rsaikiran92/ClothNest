import { Box, Flex, Text } from "@chakra-ui/react";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import "./ProductsContainer.css";

function ProductsContainer({ item }) {
  return (
    <Box className="item">
      <img className="img" src={item.avatar} alt="image" />
      <Box p={"8px"}>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Text truncate w={"170px"}>
            {item.product_name}
          </Text>
          <FaRegHeart />
        </Flex>
        <Text truncate w={"180px"} className="decripction" >
            {item.productName}
          </Text>
        <div className="pricerating">
          <div>
            <b>Rs. {item.d_price}</b>
          </div>
          <div className="price">{item.price}</div>
          <div className="offer">{item.offer}</div>
        </div>
      </Box>
      <button className="cartbutton"> ADD TO CART</button>
    </Box>
  );
}

export default ProductsContainer;
