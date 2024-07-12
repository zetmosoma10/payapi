import Logos from "../../Home/components/Logos";
import ContactForm from "../components/ContactForm";

const Contacts = () => {
  return (
    <section className="max-container grid gap-y-20 md:gap-y-16 lg:grid-cols-2 lg:gap-x-20">
      <div className="max-w-[445px] mx-auto lg:max-w-none lg:mx-0">
        <ContactForm />
      </div>
      <div className="self-center max-w-[541px] mx-auto lg:max-w-none lg:mx-0">
        <h3
          className="text-san_juan_blue text-2xl font-medium tracking-[-0.18] text-center 
          lg:text-left mb-8 lg:mb-10 px-10 lg:px-0"
        >
          Join the thousands of innovators already building with us
        </h3>
        <Logos color="#36536B" />
      </div>
    </section>
  );
};

export default Contacts;
