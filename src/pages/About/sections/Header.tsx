const Header = () => {
  return (
    <div className="max-container text-center lg:text-left ">
      <h1 className="text-3xl md:text-5xl lg:text-[56px] lg:leading-[56px]  text-san_juan_blue tracking-[-0.25px] md:tracking-[-0.37px] lg:tracking-[-0.43px]">
        We empower innovators by delivering access to the financial system
      </h1>
      <div className="mt-10 md:mt-14 md:flex md:gap-20 md:items-start md:text-left">
        <h2 className="text-2xl md:text-3xl text-san_juan_blue tracking-[-0.18px] text-nowrap">
          Our Vision
        </h2>
        <p className="text-base text-light_san_juan_blue mt-4 md:mt-0">
          Our main goal is to build beautiful consumer experiences along with
          developer-friendly infrastructure. The result is an intelligent tool
          that gives everyone the ability to create amazing products that solve
          big problems. We are deeply focused on democratizing financial
          services through technology.
        </p>
      </div>
      <div className="mt-12 md:mt-16 md:flex md:gap-10 md:items-start md:text-left">
        <h2 className="text-2xl md:text-3xl text-san_juan_blue tracking-[-0.18px] text-nowrap">
          Our Business
        </h2>
        <p className="text-base text-light_san_juan_blue mt-4 md:mt-0">
          At the core of our platform is the technical infrastructure APIs that
          connect consumers. Our innovative product provides key insights for
          businesses and individuals, as well as robust reporting for
          traditional financial institutions and developers.
        </p>
      </div>
    </div>
  );
};

export default Header;
