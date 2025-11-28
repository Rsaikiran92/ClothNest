import { CloseButton, Drawer, Portal, Accordion, Span } from "@chakra-ui/react";
import { IoMenu } from "react-icons/io5";

function SideMenu() {
  return (
    <Drawer.Root placement={"start"}>
      <Drawer.Trigger asChild>
        <IoMenu className="menu_icon" />
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content style={{ backgroundColor: "white", color: "black",zIndex:"2000" }}>
            <Drawer.Header>
              <Drawer.Title>Drawer Title</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <Accordion.Root collapsible>
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
            </Drawer.Body>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}

export default SideMenu;

const items = [
  { value: "a", title: "Men", text: "Some value 1..." },
  { value: "b", title: "Women", text: "Some value 2..." },
  { value: "c", title: "Kids", text: "Some value 3..." },
  { value: "d", title: "Beauty", text: "" },
  { value: "e", title: "Genz", text: "" },
  { value: "f", title: "Sneakers", text: "" }
];

{
  /* <Box>Men</Box>
          <Box>Women</Box>
          <Box>Kids</Box>
          <Box>Home</Box>
          <Box>Beauty</Box>
          <Box>Genz</Box>
          <Box>Sneakers</Box> */
}
