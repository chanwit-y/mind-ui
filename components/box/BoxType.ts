import { ReactNode } from "react";

export type FlexDirectionType = "row" | "column";

export type BoxType = {
  id: string;
  index?: string;
  display?: string;
  flexDirection?: FlexDirectionType;
  // reactNode?: ReactNode;
  childrens?: BoxType[];
  bgColor?: string;
  width?: number;
  height?: number;
  borderRadius?: number;
  padding?: number;
  margin?: number;
};
