import { Box, Center, Text } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import Banner1 from "../../assets/Banner1.png";
import Banner2 from "../../assets/Banner2.png";
import Banner3 from "../../assets/Banner3.png";
import ATXPP from "../../assets/ATXPP.webp";
import Bank from "../../assets/Bank-Strip.webp";
import "./Home.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Home() {
  return (
    <Box className="home">
      <Carousel
        responsive={responsive}
        showDots
        removeArrowOnDeviceType={["tab", "mobile"]}
      >
        <img className="banner" src={Banner1} />
        <img className="banner" src={Banner2} />
        <img className="banner" src={Banner3} />
      </Carousel>
      <Box>
        <img src={ATXPP} />
      </Box>
      <Center>
        <img src={Bank} />
      </Center>
      <Box>
        <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JULY/30/3NjKUuUg_dfe0a6415c0a4bc7a8e09fd04fdb4f43.jpg" />
      </Box>
      {/* <Box className="category">
        {Array(13)
          .fill(0)
          .map((i) => (
            <Box className="category_box">
              <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/28219632/2024/3/12/2f53aaab-40e1-4c5b-8148-6ad150e5f4341710256687634CampusSutraMenClassicOpaqueCheckedCasualShirt2.jpg" />
              <Center>
                <Text as={"b"}>Casual wear</Text>
              </Center>
              <Center>
                <Text as={"b"} textStyle="xl" >40-80% OFF</Text>
              </Center>
              <Center>
                <Text as={"b"} >Shop Now</Text>
              </Center>
            </Box>
          ))}
      </Box> */}
      <Center>
        <img src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674661778_ft-new-strip-web-1280-x-272-1.gif" />
      </Center>
    </Box>
  );
}

export default Home;
