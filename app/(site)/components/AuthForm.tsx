"use client";

import { useCallback, useState } from "react";
// sub-component
import Input from "@/app/subComponent/input/Input";
import AuthSocialButton from "./AuthSocialButton";
import Button from "@/app/subComponent/Button";
// rhf
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
// icons
import { BsGithub, BsGoogle } from "react-icons/bs";

type Variant = "LOGIN" | "REGISTER";

// -------------------------------------------------------------

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVarient = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  // rhf
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      // axios register
    }
    if (variant == "LOGIN") {
      // nextAuth signIn
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    //  nextAuth social sign in
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        {/* ? the reason we are writing handleSubmit with onSubmit is that without wrapign the onSubmit with handleSubmit we will not get the data from */}
        {/* ? and this handleSubmit HOF (high order function) is comming by destructuring useFrom method */}
        <form
          className="space-y-6 "
          onSubmit={handleSubmit(onSubmit)}
        >
          {variant === "REGISTER" && (
            <Input
              id="name"
              label="Name"
              // ? this register is comming from useForm method of RHF
              register={register}
              errors={errors}
              disabled={isLoading}
            />
          )}
          <Input
            id="email"
            label="Email"
            // ? this register is comming from useForm method of RHF
            type="email"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <Input
            id="password"
            label="Password"
            // ? this register is comming from useForm method of RHF
            type="password"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <div>
            <Button
              disabled={isLoading}
              fullWidth
              type="submit"
            >
              {variant === "LOGIN" ? "Login" : "Register"}
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500 ">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            {/* ? we created this component inside main component -> it's only gonna use here */}
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => socialAction("github")}
            />
            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => socialAction("google")}
            />
          </div>
        </div>

        <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500 ">
          <div className="">
            {variant === "LOGIN"
              ? "New to Tiny Thought?"
              : "Already have an account"}
          </div>
          <div
            onClick={toggleVarient}
            className="underline cursor-pointer "
          >
            {variant === "LOGIN" ? "Create an account" : "Login"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
