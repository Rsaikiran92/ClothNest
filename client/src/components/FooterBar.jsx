import { Box, Flex, Separator } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import "./FooterBar.css"
import { useNavigate } from "react-router-dom";

function FooterBar() {
  const nav=useNavigate()
  return (
    <Box className="footerBar">
      <FaHome className="footerBar_icon" onClick={()=>nav("/")} />
       <Separator orientation="vertical"  />
      <MdAccountCircle className="footerBar_icon" onClick={()=>nav("/profile")}  />
       <Separator orientation="vertical" />
      <FaCartShopping  className="footerBar_icon" onClick={()=>nav("/cart")} />
    </Box>
  );
}

export default FooterBar;