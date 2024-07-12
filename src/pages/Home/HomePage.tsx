import Hero from "./sections/Hero";
import Incentives from "./sections/Incentives";
import LogoCloud from "./sections/LogoCloud";
import ProductFeatures from "./sections/ProductFeatures";

const HomePage = () => {
  return (
    <>
      <Hero />
      <div className="my-20  md:my-24 lg:my-36">
        <LogoCloud />
      </div>
      <ProductFeatures />
      <div className="my-20 md:my-24 lg:my-36">
        <Incentives />
      </div>
    </>
  );
};

export default HomePage;
