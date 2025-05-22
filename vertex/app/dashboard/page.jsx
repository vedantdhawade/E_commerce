import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <Link href={"/admin"}>
        <button>Admin</button>
      </Link>
    </div>
  );
};

export default page;
