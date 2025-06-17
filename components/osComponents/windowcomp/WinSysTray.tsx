"use client";
import React from "react";
import { useState } from "react";
import WinCalendar from "./WinCalendar";
import { FaChevronUp, FaWifi } from "react-icons/fa";
import { IoVolumeMediumOutline } from "react-icons/io5";
import { IoVolumeLowOutline, IoVolumeHighOutline, IoVolumeMuteOutline } from "react-icons/io5";
import { IoBatteryHalf } from "react-icons/io5";

const WinSysTray = () => {
  const [calenderclicked, setcalenderclicked] = useState<boolean>(false);
  return (
    <div className="flex w-[250px] h-full relative">
      <div
        className={`absolute bottom-[110%] right-[-120%] transition-all duration-400 ${
          calenderclicked ? "right-[5%]" : ""
        }`}
      >
        <WinCalendar />
      </div>
      <div className="flex items-center justify-between px-2 rounded-sm hover:bg-(--window-hover-background)">
        <FaChevronUp size={15} className="text-gray-500" />
      </div>
      <div className="flex flex-col items-center justify-center rounded-sm px-2 hover:bg-(--window-hover-background)">
        <h1 className="text-xs">ENG</h1>
        <h1 className="text-xs">IN</h1>
      </div>
      <div className="flex items-center justify-between rounded-sm px-2 gap-2 hover:bg-(--window-hover-background)">
        <div>
          <FaWifi size={20} />
        </div>
        <div>
          <IoVolumeMediumOutline size={20} />
        </div>
        <div>
          <IoBatteryHalf size={20} />
        </div>
      </div>
      <div
        onClick={() => setcalenderclicked(!calenderclicked)}
        className="flex flex-col items-center rounded-sm justify-center px-2 hover:bg-(--window-hover-background)"
      >
        {(() => {
          const now = new Date();
          const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
          const date = now.toLocaleDateString([], { day: "2-digit", month: "2-digit", year: "numeric" });
          return (
            <div className="flex flex-col">
              <span className="text-xs">{time}</span>
              <span className="text-xs">{date}</span>
            </div>
          );
        })()}
      </div>
    </div>
  );
};

export default WinSysTray;
