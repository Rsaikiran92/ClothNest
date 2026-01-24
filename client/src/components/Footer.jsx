import {
  Box,
  Heading,
  Text,
  Separator,
  Button,
  Group,
  Input,
  Image,
  Flex,
  Center,
} from "@chakra-ui/react";
import { TbTruckDelivery } from "react-icons/tb";
import { LuMessagesSquare } from "react-icons/lu";
import { FaArrowsRotate, FaSquareXTwitter, FaInstagram } from "react-icons/fa6";
import { MdOutlinePrivacyTip } from "react-icons/md";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaSnapchatGhost,
  FaApple,
} from "react-icons/fa";
import { BsCash } from "react-icons/bs";
import { useEffect, useState } from "react";
import icon from "../assets/logo4.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Footer.css";

function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 550);
    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const responsive = {
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const items = [
    {
      icon: <MdOutlinePrivacyTip size="60px" />,
      title: "We respect your privacy",
      text: "Your data is safe and secure with us — shop till you drop!",
    },
    {
      icon: <TbTruckDelivery size="60px" />,
      title: "Free & Fast Delivery",
      text: "A free fully-trackable 5–7 day delivery service on all orders",
    },
    {
      icon: <FaArrowsRotate size="60px" />,
      title: "Exchanges & Returns",
      text: "You have 7 days from the shipping date to return or exchange your purchase FREE OF CHARGE.",
    },
    {
      icon: <LuMessagesSquare size="60px" />,
      title: "WhatsApp Support",
      text: "Text us anytime at +91 8700411322",
    },
  ];

  return (
    <>
      <Separator borderColor={"#ebebeb"} marginTop={"20px"} />
      {isMobile ? (
        <Box className="footer_section">
          <Carousel
            responsive={responsive}
            showDots
            removeArrowOnDeviceType={["mobile"]}
          >
            {items.map((item, idx) => (
              <Box key={idx} px={6} py={8} textAlign="center" color={"black"}>
                <Center mb={4}>{item.icon}</Center>
                <Heading fontSize="lg" mb={2}>
                  {item.title}
                </Heading>
                <Text>{item.text}</Text>
              </Box>
            ))}
          </Carousel>
        </Box>
      ) : (
        <Box className="footer_section">
          {items.map((item, idx) => (
            <Box key={idx} px={6} py={8} textAlign="center">
              <Center mb={4}>{item.icon}</Center>
              <Heading mb={2} className="heading">
                {item.title}
              </Heading>
              <Text className="text">{item.text}</Text>
            </Box>
          ))}
        </Box>
      )}

      <Box className="footer">
        {/* <Heading className="footer_icon">CLOTHNEST</Heading> */}
        <img className="footer_icon" src={icon} />
        <Box className="footer_details">
          <Box className="footer_detail_box">
            <Heading className="heading">CUSTOMER SERVICE</Heading>
            <Box>
              <Text>Contact Us</Text>
              <Text>Track Order</Text>
              <Text>Return Order</Text>
              <Text>Cancel Order</Text>
            </Box>
          </Box>
          <Box className="footer_detail_box">
            <Heading className="heading">COMPANY</Heading>
            <Box>
              <Text>About Us</Text>
              <Text>Terms & Conditions</Text>
              <Text>Privacy Policy</Text>
              <Text>We are Hiring</Text>
            </Box>
          </Box>
          <Box className="footer_detail_box">
            <Heading className="heading">CONNECT WITH US</Heading>
            <Flex gap={2}>
              <FaInstagram size={"20px"} />
              <FaFacebookSquare size={"20px"} />
              <FaTwitterSquare size={"20px"} />
              <FaSquareXTwitter size={"20px"} />
              <FaSnapchatGhost size={"20px"} />
              <FaApple size={"20px"} />
            </Flex>
          </Box>
          <Box className="footer_detail_box">
            <Heading className="heading">KEEP UP TO DATE</Heading>
            <Box>
              <Group attached w="full" maxW="sm">
                <Input flex="1" placeholder="Enter your email" />
                <Button bg="yellow" color={"#1c1c1c"} variant="outline">
                  SUBSCRIBE
                </Button>
              </Group>
            </Box>
          </Box>
          <Box className="footer_detail_box">
            <Box>
              <Flex gap={4} alignItems={"center"}>
                <TbTruckDelivery size="20px" />
                <Text>15 Days Return Policy*</Text>
              </Flex>
              <Flex gap={4} alignItems={"center"}>
                <BsCash size="20px" />
                <Text>Cash On Delivery*</Text>
              </Flex>
            </Box>
          </Box>
          <Box className="footer_detail_box">
            <Heading className="heading">DOWNLOAD THE APP</Heading>
            <Flex gap={"10px"} className="footer_detail_box">
              <Image src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Fweb%2Fapp_android_v1.png&w=256&q=75" />
              <Image src="https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Fweb%2Fapp_ios_v1.png&w=256&q=75" />
            </Flex>
          </Box>
          <Box className="footer_detail_box">
            <Heading className="heading">100% SECURE PAYMENT</Heading>
            <Box>
              <Image src="https://i.postimg.cc/hGhgmgKs/Screenshot-2025-07-02-195817.png" />
            </Box>
          </Box>
        </Box>
        <Separator
          borderColor={"white"}
          marginTop={"20px"}
          marginBottom={"20px"}
        />
        <Text>All Rights Reserved TheHouseOfRare © 2025</Text>
      </Box>
    </>
  );
}

export default Footer;
