import React from "react";
import ResCard from "./ResCard";
function Body() {
  return (
    <div className="w-full px-[20px]">
      <div className="py-[10px]">Search</div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
      </div>
    </div>
  );
}

export default Body;
