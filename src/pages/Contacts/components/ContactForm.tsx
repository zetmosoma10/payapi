import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "../../../components/Button";

const schema = z.object({
  name: z.string().min(3, { message: "Name must at least 3 characters." }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  company: z.string().min(1, { message: "Company is required" }),
  title: z.string().min(1, { message: "Title is required" }),
  message: z
    .string()
    .max(200, { message: "Message must not be more than 200 characters." }),
  checkbox: z.boolean(),
});

type FormData = z.infer<typeof schema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <input
          {...register("name")}
          className={`input ${errors.name && "border-b-dark_pink"}`}
          type="text"
          placeholder="Name"
        />
        {errors.name && (
          <small className="text-charm_pink ml-5 ">{errors.name.message}</small>
        )}
      </div>
      <div>
        <input
          {...register("email")}
          className={`input ${errors.email && "border-b-dark_pink"}`}
          type="email"
          placeholder="Email Address"
        />
        {errors.email && (
          <small className="text-charm_pink ml-5 ">
            {errors.email.message}
          </small>
        )}
      </div>
      <div>
        <input
          {...register("company")}
          className={`input ${errors.company && "border-b-dark_pink"}`}
          type="text"
          placeholder="Company Name"
        />
        {errors.company && (
          <small className="text-charm_pink ml-5 ">
            {errors.company.message}
          </small>
        )}
      </div>
      <div>
        <input
          {...register("title")}
          className={`input ${errors.title && "border-b-dark_pink"}`}
          type="text"
          placeholder="title"
        />
        {errors.title && (
          <small className="text-charm_pink ml-5 ">
            {errors.title.message}
          </small>
        )}
      </div>
      <div>
        <textarea
          {...register("message")}
          className={`input ${errors.message && "border-b-dark_pink"}`}
          placeholder="Message"
        ></textarea>
        {errors.message && (
          <small className="text-charm_pink ml-5 ">
            {errors.message.message}
          </small>
        )}
      </div>
      <div className="flex items-center  space-x-6">
        <input
          {...register("checkbox")}
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
