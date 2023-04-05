import RelativeFrame from "@/components/RelativeFrame";
import { TotalDay1 } from "@/components/day-1";
import TotalDay38 from "@/components/day-38/TotalDay38";
import TotalDay39 from "@/components/day-39/TotalDay39";
import TotalDay41 from "@/components/day-41/TotalDay41";
import TotalDay42 from "@/components/day-42/TotalDay42";
import TotalDay44 from "@/components/day-44/TotalDay44";
import TotalDay45 from "@/components/day-45/TotalDay45";
import TotalDay46 from "@/components/day-46/TotalDay46";
import TotalDay47 from "@/components/day-47/TotalDay47";
import OuterLayout from "@/components/layouts/OuterLayout";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <OuterLayout className="gap-6">
      <div className={`flex h-full flex-col gap-3 ${inter.className}`}>
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
      {/* Grid */}
      <div className="grid  h-min w-full grow scale-90 grid-cols-1 justify-items-center gap-8 gap-x-14 gap-y-10  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {/* Page 1 */}
        <div className="relative flex h-fit w-0 min-w-fit flex-col gap-1.5">
          <Link
            href="/day-1"
            className="w-fit  rounded-lg bg-black/10 px-2 py-1 text-left text-2xl leading-relaxed  backdrop-blur-xl hover:bg-black/30"
          >
            Day 1
          </Link>
          <RelativeFrame>
            <TotalDay1 />
          </RelativeFrame>
        </div>
        {/* Page 38 */}
        <div className="relative flex h-fit w-0 min-w-fit flex-col gap-1.5">
          <Link
            href="/day-38"
            className="w-fit rounded-lg bg-black/10 px-2 py-1 text-left text-2xl leading-relaxed  backdrop-blur-xl hover:bg-black/30"
          >
            Day 38
          </Link>
          <RelativeFrame>
            <TotalDay38 />
          </RelativeFrame>
        </div>
        {/* Page 39 */}
        <div className="relative flex h-fit w-0 min-w-fit flex-col gap-1.5">
          <Link
            href="/day-39"
            className="w-fit rounded-lg bg-black/10 px-2 py-1 text-left text-2xl  leading-relaxed backdrop-blur-xl hover:bg-black/30"
          >
            Day 39
          </Link>

          <RelativeFrame>
            <TotalDay39 />
          </RelativeFrame>
        </div>
        {/* Page 41 */}
        <div className="relative flex h-fit w-0 min-w-fit flex-col gap-1.5">
          <Link
            href="/day-41"
            className="w-fit rounded-lg bg-black/10 px-2 py-1 text-left text-2xl  leading-relaxed backdrop-blur-xl hover:bg-black/30"
          >
            Day 41
          </Link>

          <RelativeFrame>
            <TotalDay41 />
          </RelativeFrame>
        </div>
        {/* Page 42 */}
        <div className="relative flex h-fit w-0 min-w-fit flex-col gap-1.5">
          <Link
            href="/day-42"
            className="w-fit rounded-lg bg-black/10 px-2 py-1 text-left text-2xl  leading-relaxed backdrop-blur-xl hover:bg-black/30"
          >
            Day 42
          </Link>

          <RelativeFrame>
            <TotalDay42 />
          </RelativeFrame>
        </div>
        {/* Page 44 */}
        <div className="relative flex h-fit w-0 min-w-fit flex-col gap-1.5">
          <Link
            href="/day-44"
            className="w-fit rounded-lg bg-black/10 px-2 py-1 text-left text-2xl  leading-relaxed backdrop-blur-xl hover:bg-black/30"
          >
            Day 44
          </Link>
          <RelativeFrame>
            <TotalDay44 />
          </RelativeFrame>
        </div>
        {/* Page 45 */}
        <div className="relative flex h-fit w-0 min-w-fit flex-col gap-1.5">
          <Link
            href="/day-45"
            className="w-fit rounded-lg bg-black/10 px-2 py-1 text-left text-2xl  leading-relaxed backdrop-blur-xl hover:bg-black/30"
          >
            Day 45
          </Link>
          <RelativeFrame>
            <TotalDay45 />
          </RelativeFrame>
        </div>
        {/* Page 46 */}
        <div className="relative flex h-fit w-0 min-w-fit flex-col gap-1.5">
          <Link
            href="/day-46"
            className="w-fit rounded-lg bg-black/10 px-2 py-1 text-left text-2xl  leading-relaxed backdrop-blur-xl hover:bg-black/30"
          >
            Day 46
          </Link>
          <RelativeFrame>
            <TotalDay46 />
          </RelativeFrame>
        </div>
        {/* Page 47 */}
        <div className="relative flex h-fit w-0 min-w-fit flex-col gap-1.5">
          <Link
            href="/day-47"
            className="w-fit rounded-lg bg-black/10 px-2 py-1 text-left text-2xl  leading-relaxed backdrop-blur-xl hover:bg-black/30"
          >
            Day 47
          </Link>
          <RelativeFrame>
            <TotalDay47 />
          </RelativeFrame>
        </div>
      </div>
    </OuterLayout>
  );
}
