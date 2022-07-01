import { Box } from "@mui/material";
import { red } from "@mui/material/colors";
import React, { FC, useMemo } from "react";
import { Children, Empty } from "../children";
import { BoxType } from "./BoxType";

type Props = {
  isPerview: boolean;
  prop: BoxType;
};

export const BoxAdusting: FC<Props> = ({ isPerview, prop }) => {
  const isChildrenEmpty = useMemo(
    () => prop?.childrens === undefined,
    [prop?.childrens]
  );

  return (
    <Box
      p={0.5}
      display="flex"
      alignItems="center"
      gap={1}
      border={2}
      borderRadius={1}
      sx={{
        borderStyle: "dashed",
        borderColor: red[200],
      }}
    >
      <Box
        p={prop?.padding ?? 0}
        m={prop?.margin ?? 0}
        width={!!!prop?.width && isChildrenEmpty ? 60 : prop?.width}
        height={!!!prop?.height && isChildrenEmpty ? 60 : prop?.height}
        bgcolor={prop?.bgColor}
        borderRadius={prop?.borderRadius}
      >
        {isChildrenEmpty && isPerview ? (
          <Empty />
        ) : (
          prop?.childrens?.map((c) => c)
        )}
      </Box>
      {isPerview && (
        <Box>
          <Children />
        </Box>
      )}
    </Box>
  );
};
