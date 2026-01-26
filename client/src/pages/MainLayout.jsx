import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FooterBar from "../components/FooterBar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <FooterBar/>
      <Footer />
    </>
  );
};

export default MainLayout;
