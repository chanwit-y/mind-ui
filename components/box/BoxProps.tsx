import {
  Box,
  Checkbox,
  FormControlLabel,
  Slider,
  Typography,
} from "@mui/material";
import { CirclePicker } from "react-color";
import React, { Dispatch, SetStateAction, FC, Fragment } from "react";
import { BoxType } from "./BoxType";
import { grey } from "@mui/material/colors";

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
      <Box display="flex" flexDirection="column" p={1} gap={0.5}>
        <Typography fontSize={14}>Padding</Typography>
        <Slider
          size="small"
          defaultValue={0}
          max={50}
          min={0}
          value={prop?.padding ?? 0}
          onChange={(_, v) =>
            setProp({
              ...prop,
              padding: v as number,
            })
          }
          valueLabelDisplay="auto"
        />
      </Box>
      <Box display="flex" flexDirection="column" p={1}>
        <Box display="flex" alignItems="center">
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                onChange={(e) =>
                  setProp({ ...prop, width: e.target.checked ? 0 : undefined })
                }
              />
            }
            label={<Typography fontSize={14}>width</Typography>}
          />
          {/* <Typography mr={1} fontSize={14}>width</Typography> */}
        </Box>
        <Slider
          size="small"
          defaultValue={70}
          max={1000}
          min={0}
          value={prop?.width ?? 0}
	  disabled={prop.width === undefined}
          onChange={(_, v) =>
            setProp({
              ...prop,
              width: v as number,
            })
          }
          valueLabelDisplay="auto"
        />
      </Box>
      <Box display="flex" flexDirection="column" p={1} gap={0.5}>
        <Typography fontSize={14}>height</Typography>
        <Slider
          size="small"
          defaultValue={70}
          max={1000}
          min={0}
          value={prop?.height ?? 0}
          onChange={(_, v) =>
            setProp({
              ...prop,
              height: v as number,
            })
          }
          valueLabelDisplay="auto"
        />
      </Box>
      <Box display="flex" flexDirection="column" p={1} gap={0.5}>
        <Typography fontSize={14}>Border Radius</Typography>
        <Slider
          size="small"
          defaultValue={0}
          max={50}
          min={0}
          value={prop?.borderRadius ?? 0}
          onChange={(_, v) =>
            setProp({
              ...prop,
              borderRadius: v as number,
            })
          }
          valueLabelDisplay="auto"
        />
      </Box>
    </Fragment>
  );
};
