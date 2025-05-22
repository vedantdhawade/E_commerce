import React from "react";

const Sidebar = () => {
  return (
    <section className="border-r px-5 py-3 md:w-[280px] flex flex-col gap-3">
      <div className="flex justify-center">
        <img className="h-5" src="/next.svg" alt="logo" />
      </div>
    </section>
  );
};

export default Sidebar;
