import mobileImg from "../../../assets/about/mobile/image-team-members.jpg";
import tabletImg from "../../../assets/about/tablet/image-team-members-tablet.jpg";
import desktopImg from "../../../assets/about/desktop/image-team-members-desktop.jpg";
import bgImg from "../../../assets/shared/desktop/bg-pattern-circle.svg";

const ImageShowcase = () => {
  return (
    <div className="relavite my-20">
      <img
        className="hidden w-[700px] h-[700px] md:block absolute left-[-50%] top-[-5%]"
        src={bgImg}
        alt=""
      />
      <picture>
        <source media="(max-width:767px)" srcSet={mobileImg} />
        <source media="(min-width:768px)" srcSet={desktopImg} />
        <img className="w-full" src={desktopImg} alt="" />
      </picture>
    </div>
  );
};

export default ImageShowcase;
