import financeIcon from "../../../assets/home/desktop/icon-personal-finances.svg";

const SpecialOffer = () => {
  return (
    <article className="flex flex-col items-center border border-red-500">
      <img src={financeIcon} alt="" />
      <div className="text-center mt-8">
        <h4 className="text-lg tracting-[-0.14px] text-mirage_blue">
          Personal Finances
        </h4>
        <p className="text-base tracking-[-0.12px] text-light_san_juan_blue mt-4">
          Consolidate financial data from multiple sources and categorize
          transactions up to 2 years of history. Analyze reports to reconcile
          activities in your account.
        </p>
      </div>
    </article>
  );
};

export default SpecialOffer;
