"use client";

import { logout } from "@/lib/constants";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import Link from "next/link";

const links = ["Home", "Search", "Settings"];

const NavBar = () => {
  return (
    <div className="w-full md:h-14 bg-slate-900 flex flex-col items-center justify-around md:flex-row md:justify-between">
      <div className="flex">
        <h1 className="text-4xl font-bold">
          League of Analytics
        </h1>
        <div className="mx-5 h-full">
          <QueryStatsIcon fontSize="large" />
        </div>
      </div>
      <div className="flex text-2xl xs:mt-3 md:m-0">
        {links.map((link, index) => (
          <Link href={`/auth/${link.toLowerCase()}`} key={index}>
            {
              <h1 className="mx-6 transition duration-300 hover:scale-110">
                {link}
              </h1>
            }
          </Link>
        ))}
        <button onClick={logout}>
          <h1 className="mx-6 transition duration-300 hover:scale-110">
            Sign-Out
          </h1>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
