import { Box, IconButton } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import React, { FC, useMemo } from "react";
import { useRecoilState } from "recoil";
import { Children, Empty } from "../children";
import { BoxType } from "./BoxType";
import { focusCompentAtom } from "../../lib/atom/toolbox";

import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";
import ListAltIcon from '@mui/icons-material/ListAlt';

type Props = {
  isPerview: boolean;
  prop: BoxType;
};

export const BoxAdusting: FC<Props> = ({ isPerview, prop }) => {
  const [focus, setFocus] = useRecoilState(focusCompentAtom);
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
        borderColor: focus === prop.id ? red[200] : grey[200],
      }}
    >
      <Box
        p={prop?.padding ?? 0}
        m={prop?.margin ?? 0}
        width={!!!prop?.width && isChildrenEmpty ? 70 : prop?.width}
        height={!!!prop?.height && isChildrenEmpty ? 85 : prop?.height}
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
          <IconButton onClick={() => setFocus(prop.id)} size="small">
            <CenterFocusStrongIcon fontSize="small" />
          </IconButton>
          <Children />
          <IconButton onClick={() => setFocus(prop.id)} size="small">
            <ListAltIcon fontSize="small" />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};
