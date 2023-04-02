import GenericFrame from "@/components/GenericFrame";
import { Frame, One, Text, Zero } from "@/components/day-1";
import StateProvider38 from "@/components/day-38/StateProvider";
import StateProvider39 from "@/components/day-39/StateProvider";
import StatefulError from "@/components/day-41/StatefulError";
import StarsStateProvider from "@/components/day-42/StarsStateProvider";
import Window from "@/components/day-42/Window";
import SquareProvider from "@/components/day-44/SquareProvider";
import OuterLayout from "@/components/layouts/OuterLayout";
import { openSans } from "@/fonts";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <OuterLayout>
      <div className={` mb-12 flex flex-col gap-3 ${inter.className}`}>
        <h1 className={`text-2xl font-bold leading-snug`}>
          NextJs 13.2.4 Template
        </h1>
        <h2 className={`text-lg leading-tight`}>
          Typescript, Jest and Tailwind
        </h2>
        <sub>
          *Just don`t forget to{" "}
          <span className="bg-gray-300 px-1 py-px">npm i</span>
        </sub>
      </div>
      <div className="flex h-full min-h-full flex-row flex-wrap place-content-around gap-y-6">
        {/* Page 1 */}
        <div className="relative flex h-fit w-fit flex-col gap-1.5 ">
          <Link
            href="/day-1"
            className="w-fit  rounded-lg bg-black/10 px-2 py-1 text-left text-2xl leading-relaxed  backdrop-blur-xl hover:bg-black/30"
          >
            Day 1
          </Link>
          <span className="relative h-[400px] w-[400px]">
            <Frame>
              <div className="number relative h-[100px] w-[200px]">
                <One />
                <Zero />
                <Zero left={"100px"} z={6} />
              </div>
              <Text />
            </Frame>
          </span>
        </div>
        {/* Page 38 */}
        <div className="relative flex h-fit w-fit flex-col gap-1.5 ">
          <Link
            href="/day-38"
            className="w-fit rounded-lg bg-black/10 px-2 py-1 text-left text-2xl leading-relaxed  backdrop-blur-xl hover:bg-black/30"
          >
            Day 38
          </Link>
          <span className="relative h-[400px] w-[400px]">
            <StateProvider38 />
          </span>
        </div>
        {/* Page 39 */}
        <div className="relative flex h-fit w-fit flex-col gap-1.5 ">
          <Link
            href="/day-39"
            className="w-fit rounded-lg bg-black/10 px-2 py-1 text-left text-2xl  leading-relaxed backdrop-blur-xl hover:bg-black/30"
          >
            Day 39
          </Link>
          <span className="relative h-[400px] w-[400px]">
            <GenericFrame className="bg-[#4a617a] shadow-firstDayFrame">
              <StateProvider39 />
            </GenericFrame>
          </span>
        </div>
        {/* Page 41 */}
        <div className="relative flex h-fit w-fit flex-col gap-1.5 ">
          <Link
            href="/day-41"
            className="w-fit rounded-lg bg-black/10 px-2 py-1 text-left text-2xl  leading-relaxed backdrop-blur-xl hover:bg-black/30"
          >
            Day 41
          </Link>
          <span className="relative h-[400px] w-[400px]">
            <GenericFrame
              className={`bg-[#3F3F3F] shadow-thirtyEighthFrame ${openSans.className}`}
            >
              <StatefulError />
            </GenericFrame>
          </span>
        </div>
        {/* Page 42 */}
        <div className="relative flex h-fit w-fit flex-col gap-1.5 ">
          <Link
            href="/day-42"
            className="w-fit rounded-lg bg-black/10 px-2 py-1 text-left text-2xl  leading-relaxed backdrop-blur-xl hover:bg-black/30"
          >
            Day 42
          </Link>
          <span className="relative h-[400px] w-[400px]">
            <GenericFrame
              className={`bg-white shadow-fortyTwoFrame ${openSans.className}`}
            >
              <Window>
                <StarsStateProvider />
              </Window>
            </GenericFrame>
          </span>
        </div>
        {/* Page 44 */}
        <div className="relative flex h-fit w-fit flex-col gap-1.5 ">
          <Link
            href="/day-44"
            className="w-fit rounded-lg bg-black/10 px-2 py-1 text-left text-2xl  leading-relaxed backdrop-blur-xl hover:bg-black/30"
          >
            Day 44
          </Link>
          <span className="relative h-[400px] w-[400px]">
            <GenericFrame
              className={`rounded-sm bg-[#222] shadow-fortyThreeFrame`}
            >
              <SquareProvider />
            </GenericFrame>
          </span>
        </div>
      </div>
    </OuterLayout>
  );
}
