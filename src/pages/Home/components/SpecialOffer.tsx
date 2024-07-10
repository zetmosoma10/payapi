interface Props {
  icon: string;
  headerText: string;
  text: string;
}

const SpecialOffer = ({ icon, headerText, text }: Props) => {
  return (
    <article className="flex flex-col items-center">
      <img src={icon} alt="" />
      <div className="text-center mt-8">
        <h4 className="text-lg tracting-[-0.14px] text-mirage_blue">
          {headerText}
        </h4>
        <p className="text-base tracking-[-0.12px] text-light_san_juan_blue mt-4">
          {text}
        </p>
      </div>
    </article>
  );
};

export default SpecialOffer;
