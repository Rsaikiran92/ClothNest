// components/AuthAnimation.jsx
import {
  Box,
  Button,
  Heading,
  Input,
  Text,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

const MotionBox = motion(Box);

const Login = () => {
  const [isSignup, setIsSignup] = useState(true);

  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.100">
      <Box
        w="920px"
        h="520px"
        bg="white"
        borderRadius="2xl"
        boxShadow="0 30px 60px rgba(0,0,0,0.15)"
        overflow="hidden"
        position="relative"
      >
        {/* Sliding Panel */}
        <MotionBox
          position="absolute"
          top="0"
          left={isSignup ? "50%" : "0%"}
          w="50%"
          h="100%"
          backgroundColor={"yellow"}
          color="black"
          display="flex"
          alignItems="center"
          justifyContent="center"
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 18,
          }}
          zIndex="2"
        >
          <VStack spacing={6} px={12} textAlign="center">
            <Heading fontSize="3xl">
              {isSignup ? "Welcome Back!" : "Hello, Friend!"}
            </Heading>
            <Text fontSize="sm" opacity={0.9}>
              {isSignup
                ? "Login with your personal details to stay connected"
                : "Enter your details and start your journey with us"}
            </Text>
            <Button
              variant="outline"
              borderRadius="full"
              px={8}
              _hover={{
                bg: "white",
                color: "teal.500",
              }}
              onClick={() => setIsSignup(!isSignup)}
            >
              {isSignup ? "SIGN IN" : "SIGN UP"}
            </Button>
          </VStack>
        </MotionBox>

        {/* Forms */}
        <Flex h="100%" alignItems={"center"}>
          {/* Signup */}
          <MotionBox
            w="50%"
            p={14}
            initial={false}
            animate={{
              opacity: isSignup ? 1 : 0,
              scale: isSignup ? 1 : 0.95,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            pointerEvents={isSignup ? "auto" : "none"}
          >
            <VStack spacing={5} >
              <Heading color="teal.500">Create Account</Heading>
              <Input variant="filled" placeholder="Name" />
              <Input variant="filled" placeholder="Email" />
              <Input variant="filled" type="password" placeholder="Password" />
              <Button
                colorScheme="teal"
                w="full"
                borderRadius="full"
                size="lg"
              >
                SIGN UP
              </Button>
            </VStack>
          </MotionBox>


          {/* Login */}
          <MotionBox
            w="50%"
            p={14}
            initial={false}
            animate={{
              opacity: !isSignup ? 1 : 0,
              scale: !isSignup ? 1 : 0.95,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            pointerEvents={!isSignup ? "auto" : "none"}
          >
            <VStack spacing={5}>
              <Heading color="teal.500">Sign In</Heading>
              <Input variant="filled" placeholder="Email" />
              <Input variant="filled" type="password" placeholder="Password" />
              <Button
                colorScheme="teal"
                w="full"
                borderRadius="full"
                size="lg"
              >
                SIGN IN
              </Button>
            </VStack>
          </MotionBox>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Login;
