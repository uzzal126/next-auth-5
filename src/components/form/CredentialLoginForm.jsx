"use client";

import { credentialLogin } from "@/src/app/actions";
import { useRouter } from "next/navigation";

const CredentialLoginForm = () => {
  const router = useRouter();

  const loginFormHandler = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);

      const response = await credentialLogin(formData);

      if (!!response.error) {
        console.error(response.error);
      } else {
        router.push("/");
      }
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <form onSubmit={loginFormHandler}>
        <div className="space-y-4">
          <input
            type="email"
            label="Email"
            placeholder="Enter your email"
            id="email"
            name="email"
            className="appearance-none block w-full bg-white text-heading border py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary rounded-lg"
            required
          />
          <input
            type="password"
            label="Password"
            placeholder="Enter your password"
            id="password"
            name="password"
            className="appearance-none block w-full bg-white text-heading border py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primary rounded-lg"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-7 text-base font-normal bg-primary text-white rounded-lg py-3 px-5 w-full hover:bg-secondary"
        >
          Sign in
        </button>
      </form>
    </>
  );
};

export default CredentialLoginForm;
