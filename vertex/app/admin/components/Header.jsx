"use client";
import { AlignJustify } from "lucide-react";
import React from "react";

const Header = ({ toogle }) => {
  return (
    <section className="p-4 border-b flex items-center gap-2">
      <div className="flex items-center  md:hidden justify-center">
        <button onClick={toogle}>
          <AlignJustify />
        </button>
      </div>
      <h1>Dashboard</h1>
    </section>
  );
};

export default Header;
