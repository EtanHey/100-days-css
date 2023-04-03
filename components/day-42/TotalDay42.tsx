import { openSans } from "@/fonts";
import AbsoluteFrame from "../AbsoluteFrame";
import Shooter from "./Shooter";
import Star from "./Star";
import Window from "./Window";
const TotalDay42 = () => {
  const stars = Array.from({ length: 300 }).map((_, i) => {
    return i;
  });
  const shootingStars = Array.from({ length: 6 }).map((_, i) => {
    return i;
  });
  return (
    <AbsoluteFrame
      className={`bg-white shadow-fortyTwoFrame ${openSans.className}`}
      centered={true}
    >
      <Window>
        <div className="stars-father relative h-full w-full overflow-clip rounded-full bg-gradient-to-b from-[#1d4253] to-[#6bb5c4]">
          {stars.map((i) => {
            return <Star key={`star#${i}_key`} />;
          })}
          {shootingStars.map((i) => {
            return <Shooter key={`shooter#${i}_key`} />;
          })}
        </div>
      </Window>
    </AbsoluteFrame>
  );
};

export default TotalDay42;
