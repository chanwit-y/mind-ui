import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { FC, Fragment, ReactNode } from "react";

type Props = {
  label: string;
  children: ReactNode;
};

export const LabelGroup: FC<Props> = ({ label, children }) => {
  return (
    <Fragment>
      <Typography
        fontSize={12}
        color={grey[800]}
        fontWeight={700}
        letterSpacing={1}
      >
        {label}
      </Typography>
      <Box pl={2}>{children}</Box>
    </Fragment>
  );
};
