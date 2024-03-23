import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div class="overflow-y-auto w-[200px] min-h-[100vh] py-2 px-3  bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <ul class="space-y-2">
          <li>
            <Link
              to="/postlist"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span class="ml-3">Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/create-post"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <span class="ml-3">Create Post</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
