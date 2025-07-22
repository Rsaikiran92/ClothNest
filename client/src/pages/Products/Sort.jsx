import { Button, Menu, Portal } from "@chakra-ui/react";
import { useState } from "react";
import { HiSortAscending } from "react-icons/hi";

function Sort() {
  const [value, setValue] = useState("New Arrival");
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="ghost">
          <HiSortAscending /> Sort: <b>{value} </b>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content minW="10rem" style={{backgroundColor:"white",color:"black"}}>
            <Menu.RadioItemGroup
              value={value}
              onValueChange={(e) => setValue(e.value)}
            >
              {items.map((item) => (
                <Menu.RadioItem key={item.value} value={item.value}>
                  {item.label}
                  <Menu.ItemIndicator />
                </Menu.RadioItem>
              ))}
            </Menu.RadioItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}

export default Sort;

const items = [
  { label: "New Arrival", value: "New Arrival" },
  { lable: "Price : High to Low", value: "Price : High to Low" },
  { lable: "Price : Low to High", value: "Price : Low to High" },
];
