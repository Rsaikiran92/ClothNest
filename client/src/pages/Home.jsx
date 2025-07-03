import { Box } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import Banner1 from "../assets/Banner1.png";
import Banner2 from "../assets/Banner2.png";
import Banner3 from "../assets/Banner3.png";
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
    </Box>
  );
}

export default Home;
