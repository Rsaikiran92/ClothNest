import { Box, Flex, Heading } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import { HiOutlineShoppingCart } from "react-icons/hi";
import "./Navbar.css";
import logo from "../assets/logo1.png"

function Navbar() {
  return (
    <>
      <Marquee className="nav_offers_bar">
        <Box marginRight={"100px"}>☆</Box>
        <Box marginRight={"100px"}>SALE - Now live! Up to 50% Off </Box>
        <Box marginRight={"100px"}>☆</Box>
        <Box marginRight={"100px"}>SALE - Now live! Up to 50% Off </Box>
        <Box marginRight={"100px"}>☆</Box>
        <Box marginRight={"100px"}>SALE - Now live! Up to 50% Off </Box>
        <Box marginRight={"100px"}>☆</Box>
        <Box marginRight={"100px"}>SALE - Now live! Up to 50% Off </Box>
      </Marquee>
      <Box style={{ backgroundColor: "white" }} position={"sticky"} top={"0px"}>
        <Box className="navbar">
          <img width={"200px"} height={"50px"} src={logo} />
        </Box>
        {/* <Flex
          className="navbar_menu"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box>Men</Box>
          <Box>Women</Box>
          <Box>Kids</Box>
          <Box>Home</Box>
          <Box>Beauty</Box>
          <Box>Genz</Box>
          <Box>Sneakers</Box>
        </Flex> */}
      </Box>
    </>
  );
}

export default Navbar;
