import {
  Box,
  Card,
  Text,
  Image,
  Button,
  Accordion,
  Span,
  HStack,
  Separator,
} from "@chakra-ui/react";
import "./ProductDetails.css";
import ImageCarousel from "./ImageCarousel";
import RelatedProducts from "./RelatedProducts";

const items = [
  { value: "a", title: "First Item", text: "Some value 1..." },
  { value: "b", title: "Second Item", text: "Some value 2..." },
  { value: "c", title: "Third Item", text: "Some value 3..." },
];

const ProductDetails = () => {
  return (
    <Box className="product_detail">
      <Box className="product_detail_container">
        <Box>
            <ImageCarousel/>
        </Box>
        <Box>
          <Card.Root  overflow="hidden">
            <Card.Body gap="2">
              <Card.Title>Living room Sofa</Card.Title>
              <Card.Description>
                This sofa is perfect for modern tropical spaces, baroque
                inspired spaces.
              </Card.Description>
              <Text
                textStyle="2xl"
                fontWeight="medium"
                letterSpacing="tight"
                mt="2"
              >
                $450
              </Text>
              <Button variant="solid">ADD TO CART</Button>
              <Button  variant="solid">ADD TO WISHLIST</Button>

              <Accordion.Root multiple defaultValue={["b"]}>
                {items.map((item, index) => (
                  <Accordion.Item key={index} value={item.value}>
                    <Accordion.ItemTrigger>
                      <Span flex="1">{item.title}</Span>
                      <Accordion.ItemIndicator />
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent>
                      <Accordion.ItemBody>{item.text}</Accordion.ItemBody>
                    </Accordion.ItemContent>
                  </Accordion.Item>
                ))}
              </Accordion.Root>

            </Card.Body>
          </Card.Root>
        </Box>
      </Box>

      <HStack margin={"40px 0px"}>
        <Separator flex="1" />
        <Text flexShrink="0">RELATED PRODUCTS</Text>
        <Separator flex="1" />
      </HStack>

      <RelatedProducts/>
      <RelatedProducts/>
    </Box>
  );
};

export default ProductDetails;
