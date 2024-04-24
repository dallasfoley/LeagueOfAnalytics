import Link from "next/link";
import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      <section className="flex justify-around w-full h-3/5 text-xl font-bold">
        <div className="flex flex-col justify-center items-center m-0">
          <button
            className="h-16 w-16 my-20 bg-slate-500 rounded-2xl hover:bg-slate-200
        transition duration-300 hover:scale-110 hover:text-black"
          >
            <Link href="/search">
              <SearchIcon fontSize="large" />
            </Link>
          </button>
          <h2>Search for a Summoner</h2>
        </div>
        <div className="flex flex-col justify-center items-center m-0">
          <button
            className="h-16 w-16 my-20 bg-slate-500 rounded-2xl hover:bg-slate-200
        transition duration-300 hover:scale-110 hover:text-black"
          >
            <Link href="/settings">
              <SettingsIcon fontSize="large" />
            </Link>
          </button>
          <h2>Adjust Settings</h2>
        </div>
        <div className="flex flex-col justify-center items-center m-0">
          <button
            className="h-16 w-16 my-20 bg-slate-500 rounded-2xl hover:bg-slate-200
        transition duration-300 hover:scale-110 hover:text-black"
          >
            <Link href="/home">
              <HomeIcon fontSize="large" />
            </Link>
          </button>
          <h2>Refresh Home</h2>
        </div>
      </section>

      <h1 className="text-5xl">Favorited Summoners</h1>
    </div>
  );
};

export default Home;
