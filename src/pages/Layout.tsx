import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";

const Layout = () => {
  const [sideBarToggle, setSideBarToggle] = useState(false);

  const addSideBar = () => {
    setSideBarToggle(true);
  };

  const removeSideBar = () => {
    setSideBarToggle(false);
  };

  useEffect(() => {
    if (sideBarToggle) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup on component unmount
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [sideBarToggle]);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="relative bg-background_color min-h-screen overflow-hidden">
      <NavBar addSideBar={addSideBar} />
      {sideBarToggle && <SideBar removeSideBar={removeSideBar} />}
      <Outlet />
      <div className="max-container  my-20 md:my-24">
        <CallToAction />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
