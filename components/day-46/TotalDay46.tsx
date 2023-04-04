import AbsoluteFrame from "../AbsoluteFrame";
import Dot from "./Dot";
import Row from "./Row";

const TotalDay46 = () => {
  let rows: any[][] = [];
  const generateRows = () =>
    Array.from({ length: 6 }, () => {
      rows = [...rows, Array.from({ length: 12 }, (_, i) => i)];
    });
  generateRows();
  return (
    <AbsoluteFrame
      centered={true}
      className={`rounded-md bg-[#27ae60]  shadow-fortyThreeFrame `}
    >
      {/* rows */}
      {rows.map((row, rowIndex) => {
        return (
          <Row key={rowIndex} rowIndex={rowIndex}>
            {/* dots */}
            {row.map((_, dotIndex) => {
              return (
                <Dot key={dotIndex} rowIndex={rowIndex} dotIndex={dotIndex} />
              );
            })}
          </Row>
        );
      })}
    </AbsoluteFrame>
  );
};

export default TotalDay46;
