interface Props {
  name: string;
  number: string;
}

const Stats = ({ name, number }: Props) => {
  return (
    <div className="p-4 md:border-t md:border-b border-mirage_blue border-opacity-25 w-full">
      <p className="text-base text-san_juan_blue text-opacity-70">{name}</p>
      <h4 className="font-medium text-[56px] text-dark_pink tracking-[-0.43px] ">
        {number}
      </h4>
    </div>
  );
};

export default Stats;
