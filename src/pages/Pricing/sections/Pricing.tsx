import PriceCard from "../components/PriceCard";
import { cardsData } from "../constance";

const Pricing = () => {
  return (
    <div className="grid md:grid-cols-3 gap-y-12 gap-x-8">
      {cardsData.map((card, index) => (
        <PriceCard {...card} key={index} />
      ))}
    </div>
  );
};

export default Pricing;
