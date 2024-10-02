import { auth } from "@/src/auth";
import LayoutStyleOne from "@/src/components/layouts/LayoutStyleOne";
// import Image from "next/image";

export const metadata = {
  title: "Dashboard",
  description: "Generated by create next app",
};

const DashboardView = async () => {
  const session = await auth();
  // const { user } = await auth();

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users`, {
    headers: { Authorization: `Bearer ${session?.accessToken}` },
  });
  const data = await res?.json();

  return (
    <LayoutStyleOne>
      <main>
        <h3 className="text-xl text-heading text-center mt-5">
          This is dashboard page
        </h3>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        {/* <div className="border rounded-10 p-5 mt-5 max-w-80 mx-auto">
          <div className="flex">
            {user?.image && (
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={user?.image}
                  alt={user?.name}
                  width={48}
                  height={48}
                />
              </div>
            )}
            <div className="pl-4 flex-grow">
              <h3>{user?.name}</h3>
              <p>{user?.email}</p>
            </div>
          </div>
        </div> */}
      </main>
    </LayoutStyleOne>
  );
};

export default DashboardView;
