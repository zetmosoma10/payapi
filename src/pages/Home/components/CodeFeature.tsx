import easyToImplementImg from "../../../assets/home/desktop/illustration-easy-to-implement.svg";

const CodeFeature = () => {
  return (
    <div className="grid justify-items-center md:grid-1x2">
      <img src={easyToImplementImg} alt="" />
      <div className="text-center md:text-left self-center">
        <h2 className="feature-header">
          Easy to implement
        </h2>
        <p className="feature-text">
          Our API comes with just a few lines of code. You’ll be up and running
          in no time. We built our documentation page to integrate payments
          functionality with ease.
        </p>
      </div>
    </div>
  );
};

export default CodeFeature;
