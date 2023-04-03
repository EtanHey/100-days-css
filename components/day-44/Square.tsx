import React from "react";

const Square = ({ index, play }: { index: number; play: boolean }) => {
  const delay = 2;
  const duration = (1 / 30) * (20 - index);
  return (
    <div
      style={{
        width: `${(index + 1) * 10}px`,
        height: `${(index + 1) * 10}px`,
        animation: `${delay}s rotateSquare ${duration}s ease-in-out alternate infinite`,
        animationPlayState: play ? "running" : "paused",
        borderColor: `rgb(${70 + (20 - index) * 8}, ${70 + (20 - index) * 8}, ${
          70 + (20 - index) * 8
        })`,
      }}
      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border `}
      key={index}
    />
  );
};

export default Square;

// import Image from "next/image";
// import React from "react";

// const Shooter = () => {
//   const delay = Math.ceil(Math.random() * 6) + 20;
//   const duration = Math.ceil(Math.random() * 250) / 10;
//   return (
//     <div className={`absolute -left-30 h-0.5 w-30 rounded-full`}>
//       <Image
//         src={"https://100dayscss.com/codepen/shooting-star.png"}
//         alt="shooting star"
//         style={{
//           top: `${Math.random() * 100 - 30}px`,
//           animation: `${delay}s shoot ${duration}s infinite`,
//         }}
//         fill={true}
//       ></Image>
//     </div>
//   );
// };

// //
// export default Shooter;
