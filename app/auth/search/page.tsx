"use client";

import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { LolApi, RiotApi, Constants } from "twisted";

const api = new RiotApi(
  process.env.NEXT_PUBLIC_RIOT_API_KEY || "",
);
export async function getAccount() {
  // Recommended to use the nearest routing value to your server: americas, asia, europe
  return (
    await api.Account.getByRiotId(
      "Hide on bush",
      "KR1",
      Constants.RegionGroups.AMERICAS,
    )
  ).response;
}

const Search = () => {
  const [nameInput, setNameInput] = useState("");
  const [tagInput, setTagInput] = useState("");

  const handleSearch = () => {};

  const fetchSummoner = async () => {
    try {
      const api = new LolApi(
        process.env.NEXT_PUBLIC_RIOT_API_KEY || "",
      );
      console.log(process.env.NEXT_PUBLIC_RIOT_API_KEY);
      const user = await getAccount();
      const userData = await api.Summoner.getByPUUID(
        user.puuid,
        Constants.Regions.KOREA,
      );
      console.log(userData);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex justify-center items-start w-full h-full pt-32">
      <div className="flex flex-col items-center">
        <h3>Enter Summoner Name</h3>
        <input
          type="text"
          placeholder="hide on bush"
          className="h-12 w-56 p-2 mx-5 rounded-xl text-black"
          onChange={(e) => setNameInput(e.target.value)}
          value={nameInput}
        />
      </div>
      <div className="flex flex-col items-center">
        <h3>Enter Tagline</h3>
        <input
          type="text"
          placeholder="#KR"
          className="h-12 w-32 p-2 mx-5 rounded-xl text-black"
          onChange={(e) => setTagInput(e.target.value)}
          value={tagInput}
        />
      </div>

      <button
        className="h-12 w-12 bg-slate-700 rounded-xl hover:bg-slate-200
        transition duration-300 hover:scale-110 hover:text-black"
        onClick={fetchSummoner}
      >
        <SearchIcon />
      </button>
    </div>
  );
};

export default Search;
