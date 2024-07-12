import Contacts from "./sections/Contacts";

const ContactPage = () => {
  return (
    <div className="max-container mt-12 md:mt-[75px] lg:mt-20">
      <h1
        className="font-medium text-center text-san_juan_blue text-3xl tracking-[-0.25px] 
    md:text-5xl md:tracking-[-0.37px] lg:text-left lg:text-6xl lg:tracking-[-0.43px] 
    mb-12 md:mb-16 lg:mb-[72px] max-w-[700px] mx-auto lg:max-w-none lg:mx-0"
      >
        Submit a help request and we’ll get in touch shortly.
      </h1>
      <Contacts />
    </div>
  );
};

export default ContactPage;
