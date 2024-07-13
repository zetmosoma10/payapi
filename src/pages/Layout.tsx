import { Outlet, useLocation } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useEffect } from "react";

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="relative bg-background_color min-h-screen overflow-hidden">
      <NavBar />
      <Outlet />
      <div className="max-container  my-20 md:my-24">
        <CallToAction />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
