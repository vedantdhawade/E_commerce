"use client";

import { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToogleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(!isOpen);
  }, [pathname]);

  return (
    <main className="relative flex h-screen overflow-hidden">
      {/* Sidebar for desktop */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Sidebar for mobile - slide in/out */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar />
      </div>

      {/* Overlay when sidebar is open on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-40 md:hidden"
          onClick={handleToogleSidebar}
        ></div>
      )}

      {/* Main content */}
      <section className="flex-1 flex flex-col">
        <Header toogle={handleToogleSidebar} />
        <section className="flex-1 h-full bg-gray-200 overflow-auto">
          {children}
        </section>
      </section>
    </main>
  );
}
