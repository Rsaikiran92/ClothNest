import { Button, Menu, Portal } from "@chakra-ui/react";

function MenuBar() {
  return (
    <>
     <Menu.Root defaultOpen  openDelay={100} closeDelay={200}>
      <Menu.Trigger>
        <Button variant="outline" size="sm">
          Open
        </Button>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="new-txt">New Text File</Menu.Item>
            <Menu.Item value="new-file">New File...</Menu.Item>
            <Menu.Item value="new-win">New Window</Menu.Item>
            <Menu.Item value="open-file">Open File...</Menu.Item>
            <Menu.Item value="export">Export</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
    </>
  );
}

export default MenuBar;