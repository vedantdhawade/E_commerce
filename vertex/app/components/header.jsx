import Link from "next/link";
import React from "react";

const Header = () => {
  const menulist = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <nav className="p-2 flex border-b justify-between items-center">
      <img src="next.svg" className="h-6" alt="logo" />
      <div className="flex items-center gap-4 ">
        {menulist.map((item) => {
          return (
            <Link key={item.name} href={item.path}>
              <button>{item.name}</button>
            </Link>
          );
        })}
        <Link href="/login">
          <button className="bg-blue-600 px-4 py-1 rounded-full">Login</button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
