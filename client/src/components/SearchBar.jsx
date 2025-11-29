import {
  Button,
  CloseButton,
  Drawer,
  Flex,
  Input,
  Portal,
} from "@chakra-ui/react";

function SearchBar({ open, setOpen }) {
  return (
    <Drawer.Root
      open={open}
      placement={"top"}
      onOpenChange={(e) => setOpen(e.open)}
    >
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content
            marginTop={"75px"}
            backgroundColor={"white"}
          >
            <Drawer.Body padding={2}>
              <Flex gap={"20px"}  width={"100%"} alignItems={"center"}> 
                <Input
                  placeholder="Search for ptoducts brands and more"
                  variant="subtle"
                  size={"sm"}
                />
              
                  
              <Button variant="solid" backgroundColor={"black"} color={"white"}>Search</Button>
              </Flex>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}

export default SearchBar;