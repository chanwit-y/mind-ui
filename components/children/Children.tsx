import React, { Fragment, useEffect, FC } from "react";
import { Box, IconButton, Popover } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import { Components } from "./Components";
import { useRecoilState } from "recoil";
import { toolboxAtom } from "lib/atom/toolbox";
import { grey } from "@mui/material/colors";

type Props = {
  setFocus: Function;
};

export const Children: FC<Props> = ({ setFocus }) => {
  const [selectTool] = useRecoilState(toolboxAtom);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setFocus();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  // const id = open ? "simple-popover" : undefined;

  useEffect(() => setAnchorEl(null), [selectTool]);

  return (
    <Fragment>
      <Box>
        <IconButton
          sx={{
            backgroundColor: "white",
            marginBottom: 1,

            ":hover": {
              backgroundColor: grey[200],
            },
          }}
          onClick={handleClick}
          size="small"
        >
          <AddIcon fontSize="small" />
        </IconButton>
        {/* <Box
          p={1}
          bgcolor={green[100]}
          color={grey[600]}
          borderRadius={1}
          width="70%"
          height="70%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            cursor: "pointer",
            "&:hover": {
              bgcolor: green[200],
            },
          }}
        >
          <AddIcon />
        </Box> */}
      </Box>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Components />
      </Popover>
    </Fragment>
  );
};
