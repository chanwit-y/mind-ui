import { Box, Divider, SelectChangeEvent, Typography } from "@mui/material";
import { CirclePicker } from "react-color";
import React, { Dispatch, SetStateAction, FC } from "react";
import { BoxType, FlexDirectionType } from "./BoxType";
import { SizeAdjust, LabelGroup } from "components/common";
import { SelectField } from "../common/SelectField";

type Props = {
  prop: BoxType;
  setProp: Dispatch<SetStateAction<BoxType>>;
};

export const BoxProps: FC<Props> = ({ prop, setProp }) => {
  return (
    <Box px={2} height={600} overflow="auto">
      <Box p={1} pt={2} bgcolor="white" position="sticky" top={0} zIndex={100}>
        <Typography mb={1} fontWeight={700} letterSpacing={2}>
          Props
        </Typography>
        <Divider />
      </Box>
      <Box display="flex" flexDirection="column" p={1} gap={1}>
        <Typography fontSize={14}>Bg color</Typography>
        <CirclePicker
          color={prop?.bgColor ?? "#fff"}
          onChangeComplete={(v) => setProp({ ...prop, bgColor: v.hex })}
        />
      </Box>
      <LabelGroup label="Flex">
        <SelectField
          label="display"
          value={prop?.display ?? ""}
          onSelected={(event: SelectChangeEvent) =>
            setProp((perv) => ({ ...perv, display: event.target.value }))
          }
          items={[
            { text: "flex", value: "flex" },
            { text: "grid", value: "grid" },
          ]}
        />
        <SelectField
          label="flexDirection"
          value={prop?.flexDirection ?? ""}
          onSelected={(event: SelectChangeEvent) =>
            setProp((perv) => ({
              ...perv,
              flexDirection: event.target.value as FlexDirectionType,
            }))
          }
          items={[
            { text: "row", value: "row" },
            { text: "column", value: "column" },
          ]}
        />
      </LabelGroup>

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
    </Box>
  );
};
