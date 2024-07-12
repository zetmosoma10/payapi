import Hero from "./sections/Hero";
import Incentives from "./sections/Incentives";
import LogoCloud from "./sections/LogoCloud";
import ProductFeatures from "./sections/ProductFeatures";

const HomePage = () => {
  return (
    <div className="mt-8 md:mt-12 lg:mt-16">
      <Hero />
      <div className="my-20  md:my-24 lg:my-36">
        <LogoCloud />
      </div>
      <ProductFeatures />
      <div className="mt-20 md:mt-24 lg:mt-36">
        <Incentives />
      </div>
    </div>
  );
};

export default HomePage;
