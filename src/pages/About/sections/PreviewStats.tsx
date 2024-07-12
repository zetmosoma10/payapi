import Stats from "../components/Stats";
import { statsData } from "../constance";

const PreviewStats = () => {
  return (
    <div className="max-container ">
      <div
        className="text-center md:text-left md:flex md:items-center 
        md:justify-between space-y-8 md:space-y-0 md:space-x-5 border-t border-t-san_juan_blue border-b 
        border-b-san_juan_blue border-opacity-25 md:border-0"
      >
        {statsData.map((stat, index) => (
          <Stats key={index} {...stat} />
        ))}
      </div>
      <div className="text-center md:text-left mt-12 md:mt-16 lg:mt-[72px] lg:max-w-[920px] lg:mx-auto">
        <div className="mt-10 md:mt-14 md:flex md:gap-20 md:items-start md:text-left">
          <h2 className="text-2xl md:text-3xl text-san_juan_blue tracking-[-0.18px] text-nowrap">
            The Culture
          </h2>
          <p className="text-base text-light_san_juan_blue mt-4 md:mt-0">
            We strongly believe there's always an opportunity to learn from each
            other outside of day-to-day work, whether it's company-wide
            offsites, internal hackathons, or co-worker meetups. We always value
            cross-team collaboration and diversity of thought, no matter the job
            title.
          </p>
        </div>
        <div className="mt-12 md:mt-16 md:flex md:gap-[86px] md:items-start md:text-left">
          <h2 className="text-2xl md:text-3xl text-san_juan_blue tracking-[-0.18px] text-nowrap">
            The People
          </h2>
          <p className="text-base text-light_san_juan_blue mt-4 md:mt-0">
            We're all passionate about building a more efficient and inclusive
            financial infrastructure together. At PayAPI, we have diverse
            backgrounds and skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreviewStats;
