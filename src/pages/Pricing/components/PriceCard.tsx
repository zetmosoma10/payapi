import Button from "../../../components/Button";
import iconCheck from "../../../assets/shared/desktop/icon-check.svg";

const PriceCard = () => {
  return (
    <div className="flex flex-col items-center md:items-start border border-red-500 ">
      <header className="text-center md:text-left">
        <h3 className="font-medium text-2xl lg:text-3xl tracking-[-0.18px] lg:tracking-[-0.25px] text-dark_pink">
          Free Plan
        </h3>
        <p className="mt-3 lg:mt-4 text-base text-light_san_juan_blue">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          ipsam nostrum soluta.
        </p>
        <h4 className="lg:mt-2 text-[56px] leading-[72px] tracking-[-0.43px] text-san_juan_blue">
          $0.00
        </h4>
      </header>
      <div className="w-full  flex justify-center md:justify-start py-6 mt-6 text-san_juan_blue text-base font-medium border-y border-y-san_juan_blue border-opacity-25">
        <ul className="  space-y-2 ">
          <li>itemsassd</li>
          <li>item</li>
          <li>itemaaaaaaaaaaaaa</li>
          <li>itemdddddddd</li>
          <li>item</li>
        </ul>
      </div>
      <footer>
        <Button
          type="link"
          classNames="btn-secondary inline-block text-san_juan_blue hover:border-0
            border-san_juan_blue mt-6 hover:bg-san_juan_blue hover:text-water_white"
        >
          Resquest Acess
        </Button>
      </footer>
    </div>
  );
};

export default PriceCard;
