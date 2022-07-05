import { ReactNode } from "react";

export type BoxType = {
  id: string;
  index?: string;
  // reactNode?: ReactNode;
  childrens?: BoxType[]
  bgColor?: string;
  width?: number;
  height?: number;
  borderRadius?: number;
  padding?: number;
  margin?: number;
};
