"use client";

import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const Search = () => {
  const [input, setInput] = useState("");

  const handleSearch = () => {};

  return (
    <div className="flex justify-center items-start w-full h-full pt-32">
      <input
        type="text"
        placeholder="Search for a Summoner..."
        className="h-12 w-56 p-2 mx-5 rounded-xl text-black"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button
        className="h-12 w-12 bg-slate-700 rounded-xl hover:bg-slate-200
        transition duration-300 hover:scale-110 hover:text-black"
        onClick={handleSearch}
      >
        <SearchIcon />
      </button>
    </div>
  );
};

export default Search;
