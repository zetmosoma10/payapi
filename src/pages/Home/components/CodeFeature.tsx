import easyToImplementImg from "../../../assets/home/desktop/illustration-easy-to-implement.svg";

const CodeFeature = () => {
  return (
    <div className="grid justify-items-center md:grid-1x2">
      <img src={easyToImplementImg} alt="" />
      <div className="text-center md:text-left self-center">
        <h2 className="text-san_juan_blue text-4xl md:text-5xl leading-9 md:leading-[56px] tracking-[-0.28px] md:tracking-[-0.37px]">
          Easy to implement
        </h2>
        <p className="text-base text-light_san_juan_blue mt-6">
          Our API comes with just a few lines of code. You’ll be up and running
          in no time. We built our documentation page to integrate payments
          functionality with ease.
        </p>
      </div>
    </div>
  );
};

export default CodeFeature;
