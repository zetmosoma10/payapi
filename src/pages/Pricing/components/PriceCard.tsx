import Button from "../../../components/Button";

interface Props {
  heading: string;
  headerText: string;
  price: string;
  icon: string;
  list: { checked: boolean; item: string }[];
}

const PriceCard = ({ heading, headerText, price, icon, list }: Props) => {
  return (
    <div className="flex flex-col items-center lg:items-start">
      <header className="text-center lg:text-left">
        <h3 className="font-medium text-2xl lg:text-3xl tracking-[-0.18px] lg:tracking-[-0.25px] text-dark_pink">
          {heading}
        </h3>
        <p className="mt-3 lg:mt-4 text-base text-light_san_juan_blue">
          {headerText}
        </p>
        <h4 className="lg:mt-2 text-[56px] leading-[72px] tracking-[-0.43px] text-san_juan_blue">
          {price}
        </h4>
      </header>
      <div className="w-full  flex justify-center lg:justify-start py-6 mt-6 text-san_juan_blue text-base font-medium border-y border-y-san_juan_blue border-opacity-25">
        <ul className="  space-y-2 ">
          {list.map((cartItem, index) => (
            <li
              key={index}
              className={`flex items-center space-x-6 ${
                !cartItem.checked && "ml-[38px] opacity-35"
              }`}
            >
              {cartItem.checked && <img src={icon} alt="" />}
              <span>{cartItem.item}</span>
            </li>
          ))}
        </ul>
      </div>
      <footer>
        <Button
          type="link"
          classNames="btn-secondary text-san_juan_blue hover:border-0
            border-san_juan_blue mt-6 hover:bg-san_juan_blue hover:text-water_white"
        >
          Resquest Acess
        </Button>
      </footer>
    </div>
  );
};

export default PriceCard;
