import Star from "./Star";

const StarsStateProvider = () => {
  const stars = Array.from({ length: 300 }).map((_, i) => {
    return i;
  });
  return (
    <>
      {stars.map((i) => {
        return <Star key={`star#${i}_key`} />;
      })}
    </>
  );
};

export default StarsStateProvider;
