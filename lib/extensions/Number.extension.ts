export {};

declare global {
  interface Number {
    toDisplay: () => string;
  }
}

Number.prototype.toDisplay = function (): string {
  switch (Number(this)) {
    case 0:
      return "flex";
    case 1:
      return "grid";
    default:
      return "flex";
  }
};
