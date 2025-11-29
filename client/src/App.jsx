import Navbar from "./components/Navbar";
import { Theme } from "@chakra-ui/react";
import "./App.css";
import Footer from "./components/Footer";
import FooterBar from "./components/FooterBar";

function App() {
  return (
    <>
      <Theme appearance="light">
        <Navbar />
        <FooterBar />
        <Footer />
      </Theme>
    </>
  );
}

export default App;
