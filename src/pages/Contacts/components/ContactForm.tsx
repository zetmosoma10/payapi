import Button from "../../../components/Button";

const ContactForm = () => {
  return (
    <form className="space-y-6">
      <input className="input" type="text" placeholder="Name" />
      <div>
        <input className="input" type="email" placeholder="Email Address" />
        <small className="text-charm_pink ml-5 hidden">
          This field can't be empty
        </small>
      </div>
      <input className="input" type="text" placeholder="Company Name" />
      <input className="input" type="text" placeholder="title" />
      <textarea className="input" placeholder="Message"></textarea>
      <div className="flex items-center  space-x-6">
        <input
          className="w-6 h-6 checked:bg-dark_pink"
          type="checkbox"
          id="checkbox"
        />
        <label
          className="text-base text-san_juan_blue tracking-[-0.12px] "
          htmlFor="checkbox"
        >
          Stay up-to-date with company announcements and updates to our API
        </label>
      </div>
      <Button
        classNames="btn-secondary px-[50px] text-san_juan_blue hover:border-0
            border-san_juan_blue hover:bg-san_juan_blue hover:text-water_white"
      >
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
