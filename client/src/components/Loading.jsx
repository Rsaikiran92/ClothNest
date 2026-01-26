import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import loading from "../assets/loading.lottie";
import { Box } from "@chakra-ui/react";


function Loading() {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="100vw"
      height="100vh"
      bg="rgba(255, 255, 255, 0.2)"
      backdropFilter="blur(2px)"
      zIndex="9999"
    >
      <DotLottieReact src={loading} loop autoplay />
    </Box>
  );
}

export default Loading;
