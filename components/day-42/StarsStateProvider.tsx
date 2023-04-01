import Shooter from "./Shooter";
import Star from "./Star";
const StarsStateProvider = () => {
  const stars = Array.from({ length: 300 }).map((_, i) => {
    return i;
  });
  const shootingStars = Array.from({ length: 6 }).map((_, i) => {
    return i;
  });
  return (
    <div className="stars-father overflow-clip relative h-full w-full rounded-full bg-gradient-to-b from-[#1d4253] to-[#6bb5c4]">
      {stars.map((i) => {
        return <Star key={`star#${i}_key`} />;
      })}
      {shootingStars.map((i) => {
        return <Shooter key={`shooter#${i}_key`} />;
      })}
    </div>
  );
};

export default StarsStateProvider;
