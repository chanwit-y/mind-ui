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
      m={prop?.margin ?? 0}
      width={prop?.width}
      height={prop?.height}
      bgcolor={prop?.bgColor}
      borderRadius={prop?.borderRadius}
    >
      {prop?.childrens?.map((c) => c)}
    </Box>
  );
};
