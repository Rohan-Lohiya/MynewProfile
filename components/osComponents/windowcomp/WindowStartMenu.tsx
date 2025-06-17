import React from "react";
import { FaSearch } from "react-icons/fa";

interface WindowStartMenuProps {
  startclicked: boolean;
}

const WindowStartMenu: React.FC<WindowStartMenuProps> = ({ startclicked }) => {
  return (
    <div
      className={`absolute h-[50vh] w-[50vw] bg-(--window-primary-background) rounded-lg transition-all duration-500 z-[-1] ${
        startclicked ? "-top-[52vh] opacity-100" : "top-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-center justify-center p-2">
        <div className="flex items-center justify-center rounded-l-[50%] w-8 h-8 bg-(--window-secondary-background)">
          <FaSearch className=" ml-[15px] text-[#006df5]" />
        </div>
        <input
          type="text"
          placeholder="Search Apps"
          id="start-search-input"
          className="bg-(--window-secondary-background) w-[85%] rounded-r-full outline-[0] h-8 px-[10px]"
        />
      </div>
      <div className="px-20 py-10">
        <h1>All apps</h1>
      </div>
    </div>
  );
};

export default WindowStartMenu;
