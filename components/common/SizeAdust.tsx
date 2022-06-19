import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { Dispatch, FC, SetStateAction } from "react";

type Props = {
  name: string;
  label: string;
  value?: number;
  setProp: Dispatch<SetStateAction<any>>;
  isPxOnly?: boolean;
  isPersentOnly?: boolean;
  max?: number;
  min?: number;
};

export const SizeAdust: FC<Props> = ({
  name,
  label,
  value,
  setProp,
  isPxOnly = false,
  isPersentOnly = false,
  max = 100,
  min = 0,
}) => {
  return (
    <Box display="flex" flexDirection="column" p={1}>
      <Box display="flex" alignItems="center">
        <FormControlLabel
          control={
            <Checkbox
              size="small"
              onChange={(e) =>
                setProp((prev: any) => ({
                  ...prev,
                  [name]: e.target.checked ? 0 : undefined,
                }))
              }
            />
          }
          label={<Typography fontSize={14}>{label}</Typography>}
        />
        <TextField
          type="number"
          size="small"
          variant="standard"
          disabled={value === undefined}
          value={value ?? 0}
          onChange={(e) =>
            setProp((prev: any) => ({
              ...prev,
              [name]: Number(e.target.value),
            }))
          }
          sx={{
            marginRight: 1,
            width: 55,
            textAlign: "end",
          }}
        />
        {isPxOnly || isPersentOnly ? (
          <Typography color={grey[600]} fontSize={12}>
            {isPxOnly ? "px" : "%"}
          </Typography>
        ) : (
          <ButtonGroup variant="outlined" size="small">
            <Button variant="contained">px</Button>
            <Button>%</Button>
          </ButtonGroup>
        )}
      </Box>
      <Slider
        size="small"
        defaultValue={0}
        max={max}
        min={min}
        value={value ?? 0}
        disabled={value === undefined}
        onChange={(_, v) =>
          setProp((prev: any) => ({
            ...prev,
            [name]: v as number,
          }))
        }
        valueLabelDisplay="auto"
      />
    </Box>
  );
};
