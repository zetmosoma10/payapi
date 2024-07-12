import closeIcon from "../assets/shared/mobile/close.svg";
import { navLinks } from "../constance";
import Button from "./Button";

const SideBar = () => {
  return (
    <aside className="absolute top-0 right-0 w-[75%] bg-mirage_blue text-center h-screen px-6 pt-12">
      <header className="flex justify-end pb-6 border-b border-b-water_white border-opacity-15">
        <img src={closeIcon} alt="" />
      </header>
      <ul className="mt-[43px] space-y-8">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              className="text-water_white text-opacity-70 focus:text-opacity-100 font-bold"
              href=""
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <Button type="link" classNames="btn-primary w-full mt-8">
        Schedule a Demo
      </Button>
    </aside>
  );
};

export default SideBar;
