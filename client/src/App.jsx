import "./App.css";
import Footer from "./components/Footer";
import FooterBar from "./components/FooterBar";
import Navbar from "./components/Navbar";
import AllRoutes from "./pages/AllRoutes";
import { Theme } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Theme appearance="light">
        <Navbar />
        <AllRoutes />
        <FooterBar />
        <Footer />
      </Theme>
    </>
  );
}

export default App;
