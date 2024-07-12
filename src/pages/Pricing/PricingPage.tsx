import Pricing from "./sections/Pricing";

const PricingPage = () => {
  return (
    <div className="max-container mt-12 md:mt-[75px] lg:mt-20">
      <h1
        className="font-medium text-center text-san_juan_blue text-3xl tracking-[-0.25px] 
    md:text-5xl md:tracking-[-0.37px] lg:text-left lg:text-6xl lg:tracking-[-0.43px] 
    mb-12 md:mb-16 lg:mb-[72px]"
      >
        Pricing
      </h1>
      <Pricing />
    </div>
  );
};

export default PricingPage;
