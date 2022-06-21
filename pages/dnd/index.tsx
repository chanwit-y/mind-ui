import type { NextPage } from "next";
import { FC, Fragment, ReactNode } from "react";

const DND: NextPage = () => {
  const Knight = () => (
    <span
      style={{
        width: "100",
        height: "100",
      }}
    >
      ♘
    </span>
  );

  const Square: FC<{ children: ReactNode; black?: boolean }> = ({
    children,
    black = true,
  }) => {
    const fill = black ? "black" : "white";
    const stroke = black ? "white" : "black";
    return (
      <div
        style={{
          backgroundColor: fill,
          color: stroke,
          width: "100%",
          height: "100%",
        }}
      >
        {children}
      </div>
    );
  };

  const Board: FC<{ knightPosition: [number, number] }> = ({
    knightPosition,
  }) => {
    const renderSquare = (i: number, [knightX, knightY]: [number, number]) => {
      const x = i % 8;
      const y = Math.floor(i / 8);
      const isKnightHere = x === knightX && y === knightY;
      const black = (x + y) % 2 === 1;
      const piece = isKnightHere ? <Knight /> : null;

      return (
        <div key={i} style={{ width: "12.5%", height: "12.5%" }}>
          <Square black={black}>{piece}</Square>
        </div>
      );
    };

    const squares: ReactNode[] = [];
    for (let i = 0; i < 64; i++) {
      squares.push(renderSquare(i, knightPosition));
    }

    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {squares}
      </div>
    );
  };

  return <Board knightPosition={[0, 0]} />;
};

export default DND;
