export {};

declare global {
  interface String {
    toDisplay: () => number;
  }
}

String.prototype.toDisplay = function (): number {
  switch (String(this)) {
    case "flex":
      return 0;
    default:
      return 0;
  }
};
