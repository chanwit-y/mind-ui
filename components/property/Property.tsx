import { Popover } from "@mui/material";
import React, { Dispatch, FC, SetStateAction } from "react";
import { BoxProps, BoxType } from "../box";

type Props = {
  prop: BoxType;
  setProp: Dispatch<SetStateAction<BoxType>>;
  setAnchorEl: Dispatch<SetStateAction<HTMLButtonElement | null>>;
  anchorEl: HTMLButtonElement | null;
};

export const Property: FC<Props> = ({ prop, setProp, anchorEl, setAnchorEl}) => {
  //   const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
  //     null
  //   );

  //   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //     setAnchorEl(event.currentTarget);
  //   };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
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
      <BoxProps prop={prop} setProp={setProp} />
    </Popover>
  );
};
