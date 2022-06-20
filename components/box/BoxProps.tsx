import { Box, Typography } from "@mui/material";
import { CirclePicker } from "react-color";
import React, { Dispatch, SetStateAction, FC, Fragment } from "react";
import { BoxType } from "./BoxType";
import { SizeAdjust,LabelGroup } from "components/common";

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

      <LabelGroup label="Margin/Padding">
        <SizeAdjust
          name="margin"
          label="margin"
          max={10}
          value={prop.margin}
          setProp={setProp}
          isPxOnly
        />
        <SizeAdjust
          name="padding"
          label="padding"
          max={10}
          value={prop.padding}
          setProp={setProp}
          isPxOnly
        />
      </LabelGroup>


      <LabelGroup label="Size">
        <SizeAdjust
          name="width"
          label="width"
          value={prop.width}
          setProp={setProp}
        />
        <SizeAdjust
          name="height"
          label="height"
          value={prop.height}
          setProp={setProp}
        />
      </LabelGroup>

      <LabelGroup label="Border">
        <SizeAdjust
          name="borderRadius"
          label="Border Radius"
          max={50}
          isPxOnly
          value={prop.borderRadius}
          setProp={setProp}
        />
      </LabelGroup>
    </Fragment>
  );
};
