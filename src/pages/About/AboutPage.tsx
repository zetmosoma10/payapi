import Header from "./sections/Header";
import ImageShowcase from "./sections/ImageShowcase";
import PreviewStats from "./sections/PreviewStats";

const AboutPage = () => {
  return (
    <div className="mt-12 md:mt-[75px] lg:mt-20">
      <Header />
      <div className="mt-20 mb-12">
        <ImageShowcase />
      </div>
      <PreviewStats />
    </div>
  );
};

export default AboutPage;
