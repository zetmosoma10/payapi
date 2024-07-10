import phoneImg from "../../../assets/home/desktop/illustration-simple-ui.svg";

const PhoneFeature = () => {
  return (
    <div className="grid md:grid-1x2">
      <img className="order-1 md:order-2" src={phoneImg} alt="" />
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
