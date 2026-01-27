import { Box } from "@chakra-ui/react";
import CartEmpty from "./CartEmpty";
import Step from "../../components/ui/Step";

function Cart() {
  return (
    <Box>
      <Step />
      <CartEmpty />
    </Box>
  );
}

export default Cart;
