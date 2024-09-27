"use client";

import Link from "next/link";

const Navigation = () => {
  return (
    <div className="main-menu">
      <ul className="flex items-center justify-center space-x-9 relative z-50">
        <li className="group relative">
          <Link
            href="/"
            className="py-6 text-lg text-heading hover:text-primary"
          >
            Home
          </Link>
        </li>
        <li className="group relative">
          <Link
            href="/"
            className="py-6 text-lg text-heading hover:text-primary"
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
