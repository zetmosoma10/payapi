import { Link } from "react-router-dom";
import closeIcon from "../assets/shared/mobile/close.svg";
import { navLinks } from "../constance";
import Button from "./Button";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  removeSideBar: () => void;
}

const SideBar = ({ removeSideBar }: Props) => {
  return (
    <AnimatePresence>
      <motion.aside
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.4 }}
        className="absolute top-0 right-0 w-[75%] bg-mirage_blue text-center h-screen px-6 pt-12"
      >
        <header className="flex justify-end pb-6 border-b border-b-water_white border-opacity-15">
          <img
            className="cursor-pointer"
            onClick={removeSideBar}
            src={closeIcon}
            alt=""
          />
        </header>
        <ul className="mt-[43px] space-y-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="text-water_white text-opacity-70 focus:text-opacity-100 font-bold"
                onClick={removeSideBar}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <Button type="link" to="contact" classNames="btn-primary w-full mt-8">
          Schedule a Demo
        </Button>
      </motion.aside>
    </AnimatePresence>
  );
};

export default SideBar;
