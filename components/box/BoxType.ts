import { ReactNode } from "react";

export type BoxType = {
  index?: string;
  childrens?: ReactNode[];
  bgColor?: string;
  width?: number;
  height?: number;
  borderRadius?: number;
  padding?: number;
  margin?: number;
};
