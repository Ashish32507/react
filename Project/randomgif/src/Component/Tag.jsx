import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";

export default function Tag() {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);
  const [tag, setTag] = useState("car");
  async function fetchData() {
    setLoading(true);
    const API_KEY = "ly4moHPxSR48xz8JYT3NIDRMxlMooN93";
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const { data } = await axios.get(url);
    const gifData = data.data.images.downsized_large.url;
    setGif(gifData);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function clickHandler() {
    fetchData();
  }

  function changeHandler(e) {
    const value = e.target.value;
    setTag(value);
  }

  return (
    <>
      <div className="w-1/2 h-[400px] bg-green-400 rounded-lg border-black border-2 flex flex-col items-center gap-y-5 my-[5px] mb-10">
        <h1 className="text-2xl underline uppercase font-bold">
          Random {tag} Gif
        </h1>
        {loading ? (
          <Spinner /> // Show spinner while loading
        ) : (
          <img src={gif} alt="Random Gif" className="h-[200px]" />
        )}
        <input
          onChange={changeHandler}
          type="text"
          className="w-10/12 bg-white text-2xl py-1 rounded-lg font-semibold focus:outline-none px-2"
        />
        <button
          onClick={clickHandler}
          className="w-10/12 bg-white text-2xl py-1 rounded-lg font-semibold"
        >
          Generate
        </button>
      </div>
    </>
  );
}
