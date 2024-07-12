import HeroImg from "../../../assets/home/desktop/illustration-phone-mockup.svg";
import ActionPanel from "../../../components/ActionPanel";

const Hero = () => {
  return (
    <section className="max-container">
      <div className=" grid gap-x-16 min-[840px]:grid-cols-2 max-w-[520px] mx-auto min-[840px]:max-w-none min-[840px]:mx-0">
        <img
          className="w-full order-1 min-[840px]:order-2"
          src={HeroImg}
          alt=""
        />
        <div className="text-center max-w-[550px] lg:max-w-none order-2 min-[840px]:order-1 min-[840px]:text-left self-center">
          <h1 className="font-medium text-san_juan_blue text-3xl tracking-[-0.25px] md:text-5xl lg:text-7xl  md:tracking-[-0.25px] lg:tracking-[-0.55px] ">
            Start building with our APIs for absolutely free.
          </h1>
          <div className="mt-6">
            <ActionPanel />
            <p className="mt-6 text-light_san_juan_blue text-base">
              Have any questions?{" "}
              <a className="font-bold" href="">
                Contact Us
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
