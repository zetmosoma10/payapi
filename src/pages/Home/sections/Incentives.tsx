import SpecialOffer from "../components/SpecialOffer";
import { incentivesData } from "../constance";

const Incentives = () => {
  return (
    <div className="max-container">
      <div className="grid gap-y-12 md:grid-cols-3 md:gap-y-0 md:gap-x-7">
        {incentivesData.map((item, index) => (
          <SpecialOffer {...item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Incentives;
