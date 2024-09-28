import LayoutStyleOne from "@/src/components/layouts/LayoutStyleOne";

import Image from "next/image";
import { redirect } from "next/navigation";
import { auth } from "./auth";

export const metadata = {
  title: "Next auth",
  description: "Generated by create next app",
};

const Home = async () => {
  const session = await auth();

  if (!session?.user) redirect("/login");
  return (
    <LayoutStyleOne>
      <main>
        <h3 className="text-xl text-heading text-center mt-5">
          Login with next auth
        </h3>
        <div className="border rounded-10 p-5 mt-5 max-w-80 mx-auto">
          <div className="flex">
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={session?.user?.image}
                alt={session?.user?.name}
                width={48}
                height={48}
              />
            </div>
            <div className="pl-4 flex-grow">
              <h3>{session?.user?.name}</h3>
              <p>{session?.user?.email}</p>
            </div>
          </div>
        </div>
      </main>
    </LayoutStyleOne>
  );
};

export default Home;
