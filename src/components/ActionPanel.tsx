import Button from "./Button";

const ActionPanel = () => {
  return (
    <form className="flex flex-col gap-4 md:rounded-3xl md:flex-row md:items-center md:bg-water_white md:shadow-md">
      <input
        className="text-mirage_blue md:w-full bg-water_white pt-4 pb-[14px] pl-6 rounded-3xl placeholder:text-base placeholder:text-san_juan_blue
            placeholder:text-opacity-50 placeholder:font-bold shadow-md md:shadow-none outline-none"
        type="email"
        placeholder="Enter email address"
      />
      <Button classNames="btn-primary px-6 text-nowrap">Schedule a Demo</Button>
    </form>
  );
};

export default ActionPanel;
