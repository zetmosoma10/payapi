import { Outlet, useLocation } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { AnimatePresence, motion } from "framer-motion";

const Layout = () => {
  const location = useLocation();
  return (
    <div className="relative bg-background_color min-h-screen overflow-hidden">
      <NavBar />
      <AnimatePresence>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
      <div className="max-container  my-20 md:my-24">
        <CallToAction />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
