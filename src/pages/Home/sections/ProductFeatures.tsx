import CodeFeature from "../components/CodeFeature";
import PhoneFeature from "../components/PhoneFeature";

const ProductFeatures = () => {
  return (
    <div className="max-container">
      <CodeFeature />
      <div className="mt-20 md:mt-24">
        <PhoneFeature />
      </div>
    </div>
  );
};

export default ProductFeatures;
