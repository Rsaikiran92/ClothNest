import Marquee from "react-fast-marquee";
import { Box } from "@chakra-ui/react";
import "./OfferBar.css"

function OfferBar() {
  return (
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
  );
}

export default OfferBar;