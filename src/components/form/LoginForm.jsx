import { socialLogin } from "@/src/app/actions";

import Link from "next/link";
import CredentialLoginForm from "./CredentialLoginForm";

const LoginForm = () => {
  return (
    <div className="rounded-2xl p-12 lg:max-w-[615px] shadow-[0_2px_15px_0_rgba(0,0,0,10%)] mx-auto">
      <div className="mb-9 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-[40px] font-semibold text-heading leading-none mb-4">
          Welcome back
        </h2>
      </div>

      <CredentialLoginForm />

      <div className="flex justify-center text-sm">
        <p className="mt-3">
          Don't have an account?
          <Link
            href="/sign-up"
            className="text-primary ml-1 hover:text-secondary font-medium"
          >
            Join
          </Link>
        </p>
      </div>
      <div className="mt-6 mb-7 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-dashed before:border-[#bdbdbd] after:mt-0.5 after:flex-1 after:border-t after:border-dashed after:border-[#bdbdbd]">
        <p className="mx-4 mb-0 text-center font-medium text-base">Or</p>
      </div>
      <form action={socialLogin} className="flex space-x-5">
        <button
          type="submit"
          value="google"
          name="action"
          className="w-full border text-base text-paragraph py-3 px-5 rounded-lg hover:bg-primary hover:border-primary hover:text-white"
        >
          Continue with Google
        </button>
        <button
          type="submit"
          value="github"
          name="action"
          className="w-full border text-base text-paragraph py-3 px-5 rounded-lg hover:bg-primary hover:border-primary hover:text-white"
        >
          Continue with Github
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
