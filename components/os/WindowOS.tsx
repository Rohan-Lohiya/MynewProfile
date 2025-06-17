import React from "react";
import WindowDock from "../dock/WindowDock";

const WindowOS = () => {
  return (
    <div className="w-screen h-screen relative">
      <div>
        <h1>THis is desktop</h1>
      </div>
      <div className="absolute bottom-0 left-0 w-full z-10">
        <WindowDock />
      </div>
    </div>
  );
};

export default WindowOS;
