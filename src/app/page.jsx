import LayoutStyleOne from "@/src/components/layouts/LayoutStyleOne";

export const metadata = {
  title: "Next auth",
  description: "Generated by create next app",
};

const Home = () => {
  return (
    <LayoutStyleOne>
      <main>
        <h3 className="text-xl text-heading text-center mt-5">Next Auth</h3>
      </main>
    </LayoutStyleOne>
  );
};

export default Home;