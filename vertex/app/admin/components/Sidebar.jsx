import { auth } from "@/lib/firestore/firebase";
import { signOut } from "firebase/auth";
import {
  Bitcoin,
  Boxes,
  ChartColumnStacked,
  LayoutDashboard,
  LibraryBig,
  PackageSearch,
  PersonStanding,
  ShieldUser,
  Star,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const Sidebar = () => {
  const menulist = [
    {
      name: "Dashboard",
      link: "/admin",
      icon: <LayoutDashboard className="h-5" />,
    },
    {
      name: "Products",
      link: "/admin/products",
      icon: <PackageSearch className="h-5" />,
    },
    {
      name: "Categories",
      link: "/admin/ccategories",
      icon: <ChartColumnStacked className="h-5" />,
    },
    {
      name: "Brands",
      link: "/admin/brands",
      icon: <Bitcoin className="h-5" />,
    },
    {
      name: "Orders",
      link: "/admin/orders",
      icon: <Boxes className="h-5" />,
    },
    {
      name: "Customers",
      link: "/admin/customers",
      icon: <PersonStanding className="h-5" />,
    },
    {
      name: "Reviews",
      link: "/admin/reviews",
      icon: <Star className="h-5" />,
    },
    {
      name: "Collections",
      link: "/admin/collections",
      icon: <LibraryBig className="h-5" />,
    },
    {
      name: "Admins",
      link: "/admin/admins",
      icon: <ShieldUser className="h-5" />,
    },
  ];

  return (
    <section className="border-r md:w-[280px] flex flex-col overflow-hidden h-screen">
      {/* Sticky Logo */}
      <div className="flex justify-center pt-5 sticky top-0 bg-white z-10">
        <img className="h-5" src="/next.svg" alt="logo" />
      </div>

      {/* Scrollable Menu */}
      <ul className="flex flex-col gap-5 w-full px-3 py-5 overflow-y-auto flex-grow">
        {menulist.map((item, index) => {
          return <Tab item={item} key={index} />;
        })}
      </ul>

      {/* Sticky Logout */}
      <div className="flex justify-center sticky bottom-0 bg-white p-2 z-10 border-t">
        <button
          className="rounded-xl p-2 w-full hover:bg-indigo-300 hover:text-black transition-all duration-300 ease-soft-spring"
          onClick={async () => {
            try {
              await toast.promise(signOut(auth), {
                error: (e) => e?.message,
                loading: "Loading ...",
                success: "Logout Successfully",
              });
            } catch (error) {
              console.log(error);
            }
          }}
        >
          Logout
        </button>
      </div>
    </section>
  );
};

function Tab({ item }) {
  const pathname = usePathname();
  const isSelected = pathname === item?.link;

  return (
    <li
      className={`py-2 px-4 rounded-md ease-soft-spring transition-all duration-300 ${
        isSelected ? "bg-blue-500 text-white" : "bg-white"
      }`}
    >
      <Link href={item.link}>
        <button className="flex h-full items-center gap-2">
          {item.icon}
          {item.name}
        </button>
      </Link>
    </li>
  );
}

export default Sidebar;
