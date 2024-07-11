import ActionPanel from "./ActionPanel";

const CallToAction = () => {
  return (
    <div className="max-container flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 max-w-[500px] lg:max-w-none mx-auto">
      <h3 className="self-center text-3xl md:text-5xl tracking-[-0.25px] tracking-[-0.37px] font-medium text-san_juan_blue">
        Ready to start?
      </h3>
      <ActionPanel />
    </div>
  );
};

export default CallToAction;
