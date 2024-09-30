import Image from "next/image";
import Link from "next/link";

import logo from "@/public/images/logo/logo.png";
import Navigation from "@/src/components/header/Navigation";

import { logoutHandler } from "@/src/app/actions";
import { auth } from "@/src/auth";

const HeaderCommon = async () => {
  const session = await auth();
  return (
    <header className="bg-white w-full shadow-[0_1px_3px_0_rgba(66,66,66,36%)] py-2">
      <div className="container">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-6 xl:col-span-3">
            <div className="header-logo max-w-10 ">
              <Link href="/">
                <Image src={logo} alt="Logo" />
              </Link>
            </div>
          </div>
          <div className="xl:col-span-6 hidden xl:block">
            <Navigation />
          </div>
          <div className="col-span-6 xl:col-span-3">
            <div className="relative flex items-center justify-end">
              <div className="space-x-5 flex items-center">
                {!session && (
                  <Link
                    href="/login"
                    className="text-base text-heading hover:text-secondary border rounded-md px-5 py-1.5"
                  >
                    Login
                  </Link>
                )}
                {session && (
                  <form action={logoutHandler}>
                    <button
                      type="submit"
                      className="text-base text-heading hover:text-secondary border rounded-md px-5 py-1.5"
                    >
                      Log out
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderCommon;
