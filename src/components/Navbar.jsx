import { useRouter } from "next/router";
import Clock from "@/pages/Clock";
import Stopwatch from "@/pages/Stopwatch";
import Timer from "@/pages/Timer";

export const Navbar = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center pt-10">
      <div className="flex justify-evenly bg-gray-300 w-[50%] py-3">
        <div>
          <button onClick={() => router.push("/Clock")}>Clock</button>
        </div>
        <div className="">
          <button onClick={() => router.push("/Stopwatch")}>Stopwatch</button>
        </div>
        <div>
          <button onClick={() => router.push("/Timer")}>Timer</button>
        </div>
      </div>
    </div>
  );
};
