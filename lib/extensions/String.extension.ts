export {};

declare global {
  interface String {
    toDisplayValue: () => string;
  }
}

String.prototype.toDisplayValue = function (): string {
  switch (String(this)) {
    case "flex":
      return "1";
    case "grid":
      return "2";
    default:
      return "";
  }
};
