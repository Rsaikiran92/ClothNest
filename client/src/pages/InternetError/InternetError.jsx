import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useOnlineStatus from "../../Hooks/useOnlineStatus";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import NoNetwork from "../../assets/NoNetwork.lottie"

const NetworkError = () => {
  const navigate = useNavigate();
  const isOnline = useOnlineStatus();

  const handlereload = () => {
    if (isOnline) {
      window.location.assign("/");
    }
  };

  return (
    <Box
      minH="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      bg="gray.50"
      px={6}
    >
      <DotLottieReact src={NoNetwork} loop autoplay style={{width:"400px"}} />
      <Heading color="red.500" mb={4}>
        No Internet Connection
      </Heading>
      <Text color="gray.600" mb={6}>
        Please check your network and try again.
      </Text>

      <Button colorScheme="teal" onClick={() => handlereload()}>
        Retry
      </Button>
    </Box>
  );
};

export default NetworkError;
