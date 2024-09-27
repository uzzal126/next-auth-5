import Link from "next/link";

const TagButton = ({ name, link }) => {
  return (
    <Link
      href={link}
      className="py-2 sm:py-3 px-4 sm:px-7 inline-block text-base sm:text-lg text-heading hover:text-secondary border border-dashed border-[#1C4FCA] bg-[#E6EDFA] rounded-20 transition-all duration-300"
    >
      {name}
    </Link>
  );
};

export default TagButton;
