import Navbar from "./components/Navbar";
import { Theme } from "@chakra-ui/react";
import { Toaster } from "./components/ui/toaster";
import "./App.css";
import Footer from "./components/Footer";
import FooterBar from "./components/FooterBar";
import AllRoutes from "./pages/AllRoutes";
import Loading from "./components/Loading";

function App() {
  return (
    <>
      <Theme appearance="light">
        <Toaster />
        <Navbar />
        <AllRoutes />
        <FooterBar />
        <Footer />
      </Theme>
    </>
  );
}

export default App;
