import Navbar from "./components/Navbar";
import { Theme } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <>
      <Theme appearance="light">
        <Navbar />
      </Theme>
    </>
  );
}

export default App;
