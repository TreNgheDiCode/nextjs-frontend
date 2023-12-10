"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "./button";

const formSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Vui lòng nhập ít nhất 1 ký tự",
    })
    .email("Email không hợp lệ"),
});

const RegisterForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    router.push(`/camon?email=${values.email}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="flex items-center justify-between">
          <label className="text-xs font-semibold">Email address</label>
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
          )}
        </div>
      </div>
      <input
        {...register("email")}
        disabled={isSubmitting}
        type="email"
        placeholder="Type your email address..."
        className={`
            rounded-lg border border-slate-500 p-3 text-sm w-full hover:cursor-pointer
            ${
              errors.email &&
              "text-red-500 bg-red-500/30 placeholder:text-red-500"
            }
          `}
        autoFocus
      />
      <Button text="Subscirbe to monthly newsletter" />
    </form>
  );
};

export default RegisterForm;
