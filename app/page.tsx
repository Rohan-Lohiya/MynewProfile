import Image from "next/image";
import WindowOS from "@/components/os/WindowOS";
import { ThemeToggle } from "@/components/ThemeToggle";
import WinCalendar from "@/components/osComponents/windowcomp/WinCalendar";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden ">
      <ThemeToggle />
      <WindowOS />
    </div>
  );
}
