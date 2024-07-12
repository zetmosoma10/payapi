import desktopImg from "../../../assets/about/desktop/image-team-members-desktop.jpg";
import mobileImg from "../../../assets/about/mobile/image-team-members.jpg";

const ImageShowcase = () => {
  return (
    <picture>
      <source media="(max-width:767px)" srcSet={mobileImg} />
      <source media="(min-width:768px)" srcSet={desktopImg} />
      <img className="w-full" src={desktopImg} alt="" />
    </picture>
  );
};

export default ImageShowcase;
