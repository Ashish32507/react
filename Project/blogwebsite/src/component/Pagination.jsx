import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

function Pagination() {
  const { page, handlePageChange, totalpage } = useContext(AppContext);
  return (
    <div className="w-full h-14 bg-slate-100 flex items-center justify-center fixed bottom-0 left-0 ">
      <div className="w-11/12 max-w-[550px] flex justify-between">
        <div className="flex gap-x-3">
          {page > 1 && (
            <button
              onClick={() => handlePageChange(page - 1)}
              className="text-lg font-semibold border-2 px-2 rounded-md"
            >
              Previous
            </button>
          )}
          {page < totalpage && (
            <button
              className="text-lg font-semibold  border-2 px-2 rounded-md"
              onClick={() => handlePageChange(page + 1)}
            >
              Next
            </button>
          )}
        </div>
        <p className="text-xl font-semibold">
          Page {page} of {totalpage}
        </p>
      </div>
    </div>
  );
}

export default Pagination;
