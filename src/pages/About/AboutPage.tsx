import Header from "./sections/Header";
import ImageShowcase from "./sections/ImageShowcase";
import PreviewStats from "./sections/PreviewStats";

const AboutPage = () => {
  return (
    <>
      <Header />
      <div className="mt-20 mb-12">
        <ImageShowcase />
      </div>
      <PreviewStats />
    </>
  );
};

export default AboutPage;
