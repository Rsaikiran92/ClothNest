import { Box } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import { HiOutlineShoppingCart } from "react-icons/hi";
import "./Navbar.css";

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
      <Box
        style={{ backgroundColor: "white" }}
        position={"sticky"}
        top={"0px"}
        className="navbar"
      >
        <Box>CLOTHNEST</Box>
        <Box>

        </Box>
      </Box>
      {/* <Box h={"100vh"} style={{backgroundColor:"red"}} >

      </Box> */}
    </>
  );
}

export default Navbar;
