import bgPattern from "../../../assets/shared/desktop/bg-pattern-circle.svg";
import Button from "../../../components/Button";
import Logos from "../components/Logos";

const LogoCloud = () => {
  return (
    <div className="relative bg-mirage_blue py-20 md:py-[88px] md-[100px]">
      <img
        className="absolute top-[-40%] md:top-auto md:bottom-[20%] md:left-[-20%]"
        src={bgPattern}
        alt=""
      />
      <div className="max-container grid md:grid-1x2 gap-x-10 gap-y-14">
        <Logos color="#fbfcfe" />
        <div className="text-center z-10 md:text-left order-2 md:order-1 ">
          <h2 className="text-3xl lg:text-5xl tracking-[-0.25px] lg:tracking-[-0.37px] text-water_white ">
            Who we work with
          </h2>
          <p className="text-base text-water_white text-opacity-70 mt-4 lg:mt-6 md:mt-6">
            Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.
          </p>
          <Button
            type="button"
            classNames="btn-secondary mx-auto md:mx-0 mt-[60px] md:mt-8 "
          >
            About Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
