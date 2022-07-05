import type { Item } from "@/types/SelectFieldType";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React, { FC } from "react";

type Props = {
  label: string;
  value: string;
  onSelected: (event: SelectChangeEvent) => void;
  items: Item[];
};

export const SelectField: FC<Props> = ({ label, value, onSelected, items }) => {
  //   const handleChange = (event: SelectChangeEvent) => {
  //     setProp((perv) => ({ ...perv, display: event.target.value }));
  //   };

  return (
    <FormControl variant="standard" size="small" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel>{label}</InputLabel>
      <Select value={value} label={label} onChange={onSelected}>
        <MenuItem value="">None</MenuItem>
        {items.map((i) => (
          <MenuItem value={i.value}>{i.text}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
