import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import Button from "./Button";

const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

type Input = z.infer<typeof schema>;

const ActionPanel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`flex flex-col md:rounded-3xl md:flex-row md:items-center
         md:bg-water_white md:shadow-md ${
           errors.email && "md:border md:border-dark_pink"
         }`}
      >
        <input
          {...register("email")}
          className={`input-action-panel ${
            errors.email && "max-[768px]:border max-[768px]:border-dark_pink"
          }`}
          type="email"
          placeholder="Enter email address"
        />
        {errors.email && (
          <small className="text-left ml-4 mt-2 md:hidden text-dark_pink">
            {errors.email?.message}
          </small>
        )}
        <Button classNames="btn-primary px-6 text-nowrap max-[768px]:mt-4">
          Schedule a Demo
        </Button>
      </form>
      {errors.email && (
        <small className="text-left ml-4 mt-2 max-[768px]:hidden md:text-dark_pink">
          {errors.email?.message}
        </small>
      )}
    </div>
  );
};

export default ActionPanel;
