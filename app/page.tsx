import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={inter.className}>
      <nav>
        <Link href="/day-1" className="">
          Day 1
        </Link>
      </nav>
      <h1 className={`text-2xl font-bold leading-snug`}>
        NextJs 13.2.4, Typescript
      </h1>
      <h2 className={`text-lg leading-tight`}>Jest and Tailwind</h2>
      <sub>
        *Just don`t forget to{" "}
        <span className="bg-gray-300 px-1 py-px">npm i</span>
      </sub>
    </div>
  );
}
