"use client";

import InputBox from "@/src/components/form/InputBox";
import Link from "next/link";

const SignUpForm = () => {
  const registerHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="rounded-2xl p-12 lg:max-w-[615px] shadow-[0_2px_15px_0_rgba(0,0,0,10%)] mx-auto">
      <div className="mb-9 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-[40px] font-semibold text-heading leading-none mb-4">
          Register
        </h2>
      </div>
      <form onClick={registerHandler}>
        <div className="space-y-4">
          <InputBox
            type="text"
            label="Name"
            placeholder="Enter your name"
            id="name"
            inputClassName="py-3 rounded-lg"
          />
          <InputBox
            type="text"
            label="Email"
            placeholder="Enter your email"
            id="email"
            inputClassName="py-3 rounded-lg"
          />
          <InputBox
            type="password"
            label="Password"
            placeholder="Enter your password"
            id="password"
            inputClassName="py-3 rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="mt-7 text-base font-normal bg-primary text-white rounded-lg py-3 px-5 w-full hover:bg-secondary"
        >
          Sign up
        </button>
      </form>
      <p className="mt-3 text-center">
        Already have an account?
        <Link
          href="/login"
          className="text-primary ml-1 hover:text-secondary font-medium"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default SignUpForm;
