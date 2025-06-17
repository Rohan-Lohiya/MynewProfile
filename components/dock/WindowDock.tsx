"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import WindowStartMenu from "../osComponents/windowcomp/WindowStartMenu";
import WinSysTray from "../osComponents/windowcomp/WinSysTray";

const WindowDock = () => {
  const [startclicked, setstartclicked] = useState<boolean>(false);
  return (
    <div className="w-full h-[45px] bg-(--window-secondary-background) flex justify-center items-center relative ">
      <Image
        onClick={() => setstartclicked(!startclicked)}
        src={"/winicon.png"}
        width={48}
        height={48}
        alt="window"
        className="h-[30px] w-[30px]"
      ></Image>
      <WindowStartMenu startclicked={startclicked} />
      <div className="absolute right-0 top-0 h-full flex items-center">
        <WinSysTray />
      </div>
    </div>
  );
};

export default WindowDock;
