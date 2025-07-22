import { Button, CloseButton, Drawer, Portal } from "@chakra-ui/react"
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
          <Drawer.Content style={{backgroundColor:"white"}}>
            <Drawer.Context >
              {(store) => (
                <Drawer.Body pt="6" spaceY="3">
                  <p>Drawer is open: {store.open ? "true" : "false"}</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <button onClick={() => store.setOpen(false)}>Close</button>
                </Drawer.Body>
              )}
            </Drawer.Context>
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
