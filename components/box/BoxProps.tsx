import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  Slider,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { CirclePicker } from "react-color";
import React, { Dispatch, SetStateAction, FC, Fragment } from "react";
import { BoxType } from "./BoxType";
import { blue, grey } from "@mui/material/colors";
import { SizeAdust } from "../common/SizeAdust";

type Props = {
  prop: BoxType;
  setProp: Dispatch<SetStateAction<BoxType>>;
};

export const BoxProps: FC<Props> = ({ prop, setProp }) => {
  return (
    <Fragment>
      <Typography fontWeight={700} letterSpacing={2}>
        Props
      </Typography>
      <Box display="flex" flexDirection="column" p={1} gap={1}>
        <Typography fontSize={14}>Bg color</Typography>
        <CirclePicker
          color={prop?.bgColor ?? "#fff"}
          onChangeComplete={(v) => setProp({ ...prop, bgColor: v.hex })}
        />
      </Box>
      <SizeAdust
        name="padding"
        label="padding"
	max={10}
        value={prop.padding}
        setProp={setProp}
	isPxOnly
      />
      <SizeAdust
        name="width"
        label="width"
        value={prop.width}
        setProp={setProp}
      />
      <SizeAdust
        name="height"
        label="height"
        value={prop.height}
        setProp={setProp}
      />
      <SizeAdust
        name="borderRadius"
        label="Border Radius"
	max={50}
	isPxOnly
        value={prop.borderRadius}
        setProp={setProp}
      />

    </Fragment>
  );
};
