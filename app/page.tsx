import OuterLayout from "@/components/layouts/OuterLayout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <OuterLayout>
      <div className={`${inter.className}`}>
        <h1 className={`text-2xl font-bold leading-snug`}>
          NextJs 13.2.4, Typescript
        </h1>
        <h2 className={`text-lg leading-tight`}>Jest and Tailwind</h2>
        <sub>
          *Just don`t forget to{" "}
          <span className="bg-gray-300 px-1 py-px">npm i</span>
        </sub>
      </div>
    </OuterLayout>
  );
}
