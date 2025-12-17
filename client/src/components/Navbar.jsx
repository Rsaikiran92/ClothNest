import { Box, Flex, Heading, Input, InputGroup } from "@chakra-ui/react";
import { MdAccountCircle } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import "./Navbar.css";
import logo from "../assets/logo1.png";
import { LuSearch } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import OfferBar from "./OfferBar";
import SearchBar from "./SearchBar";
import { useState } from "react";
import SideMenu from "./SideMenu";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const nav = useNavigate();
  return (
    <>
      <OfferBar />
      <Box
        style={{ backgroundColor: "white" }}
        position={"sticky"}
        top={"0px"}
        zIndex={1500}
      >
        <Flex className="navbar">
          <SideMenu />
          <img
            width={"150px"}
            height={"30px"}
            src={logo}
            className="logo"
            onClick={() => nav("/")}
          />

          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            className="navbar_icon"
            gap={"20px"}
          >
            <InputGroup
              flex="1"
              startElement={<LuSearch />}
              className="search_bar"
            >
              <Input
                placeholder="Search for products brands and more"
                variant="subtle"
                size={"sm"}
                className="search_input"
              />
            </InputGroup>
            <IoSearch className="search_icon" onClick={() => setOpen(true)} />
            <MdAccountCircle className="account_icon"  />
            <FaHeart className="heart_icon" onClick={() => nav("/wishlist")} />
            <FaCartShopping
              className="cart_icon"
              onClick={() => nav("/cart")}
            />
          </Flex>
        </Flex>
        <SearchBar open={open} setOpen={setOpen} />

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
