import { atom } from "recoil";

export const toolboxAtom = atom({
  key: "toolboxAtom", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
