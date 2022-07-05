import { Box } from "@mui/material";
import { green } from "@mui/material/colors";
import React from "react";

export const Empty = () => {
  return (
    <Box flex={1} height="100%" bgcolor={green[100]} borderRadius={1} />
  );
};
