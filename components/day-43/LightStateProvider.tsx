import BulbSVG from "./Bulb";

const LightStateProvider = () => {
  return (
    <div className="relative  h-full w-full overflow-clip">
      <BulbSVG />
    </div>
  );
};

export default LightStateProvider;
