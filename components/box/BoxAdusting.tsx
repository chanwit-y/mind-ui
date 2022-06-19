import { Box } from "@mui/material";
import React, { FC } from "react";
import { BoxType } from "./BoxType";

type Props = {
  prop: BoxType;
};

export const BoxAdusting: FC<Props> = ({ prop }) => {
  return (
    <Box
      p={prop?.padding ?? 0}
      width={prop?.width ?? 100}
      height={prop?.height ?? 100}
      bgcolor={prop?.bgColor}
      borderRadius={prop?.borderRadius}
    >
      {prop?.childrens?.map((c) => c)}
    </Box>
  );
};
