import Link from "next/link";

const notFound = () => {
  return (
    <div className="h-screen text-center flex items-center justify-center flex-col">
      <h1 className="text-9xl md:text-[200px] text-secondary font-bold leading-none">
        404
      </h1>
      <h2 className="text-3xl text-secondary font-medium uppercase mb-5">
        Page not found
      </h2>
      <Link
        href="/"
        className="block text-base lg:text-xl bg-secondary text-white rounded-3xl py-1.5 lg:py-2 px-5 lg:px-8 hover:bg-primary transition-all"
      >
        Go to home
      </Link>
    </div>
  );
};

export default notFound;
