import { Box, IconButton } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import React, {
  FC,
  useMemo,
  useState,
  MouseEvent,
  Dispatch,
  SetStateAction,
} from "react";
import { useRecoilState } from "recoil";
import { Children, Empty } from "../children";
import { BoxType } from "./BoxType";
import { focusCompentAtom } from "../../lib/atom/toolbox";

import ListAltIcon from "@mui/icons-material/ListAlt";
import { Property } from "../property";

type Props = {
  isPerview: boolean;
  prop: BoxType;
  setProp: Dispatch<SetStateAction<BoxType>>;
};

export const BoxAdusting: FC<Props> = ({ isPerview, prop, setProp }) => {
  const [focus, setFocus] = useRecoilState(focusCompentAtom);
  const isChildrenEmpty = useMemo(
    () => prop?.childrens === undefined,
    [prop?.childrens]
  );

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Box
      p={0.5}
      display="flex"
      alignItems="top"
      gap={1}
      border={2}
      borderRadius={1}
      sx={{
        borderStyle: "dashed",
        borderColor: focus === prop.id ? red[200] : grey[300],
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
          prop?.childrens?.map((c) => (
            <BoxAdusting isPerview={true} prop={c} setProp={setProp} />
          ))
        )}
      </Box>
      {isPerview && (
        <Box>
          <Children setFocus={() => setFocus(prop.id)} />
          <IconButton
            sx={{ backgroundColor: "white" }}
            onClick={(e) => {
              setFocus(prop.id);
              handleClick(e);
            }}
            size="small"
          >
            <ListAltIcon fontSize="small" />
          </IconButton>
        </Box>
      )}

      <Property
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        prop={prop}
        setProp={setProp}
      />
    </Box>
  );
};
