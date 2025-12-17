import Navbar from "./components/Navbar";
import { Theme } from "@chakra-ui/react";
import "./App.css";
import Footer from "./components/Footer";
import FooterBar from "./components/FooterBar";
import Home from "./pages/Home";
import AllRoutes from "./pages/AllRoutes";

function App() {
  return (
    <>
      <Theme appearance="light">
        <Navbar />
        <AllRoutes/>
        <FooterBar />
        <Footer />
      </Theme>
    </>
  );
}

export default App;
