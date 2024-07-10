import phoneImg from "../../../assets/home/desktop/illustration-simple-ui.svg";
import bgPattern from "../../../assets/shared/desktop/bg-pattern-circle.svg";

const PhoneFeature = () => {
  return (
    <div className="grid md:grid-1x2">
      <div className="relative order-1 md:order-2">
        <img src={phoneImg} alt="" />
        <img
          className="hidden md:block absolute top-0 bottom-0 my-auto right-[-90%] 
            min-w-[500px] h-[500px] lg:min-w-[780px] lg:min-h-[780px]"
          src={bgPattern}
          alt=""
        />
      </div>
      <div className="text-center md:text-left self-center order-2 md:order-1">
        <h2 className="feature-header">Simple UI & UX</h2>
        <p className="feature-text">
          Our pre-built form is easy to integrate in your app or website’s
          checkout flow and designed to optimize conversion.
        </p>
      </div>
    </div>
  );
};

export default PhoneFeature;
