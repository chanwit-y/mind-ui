import {
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import { toolboxAtom } from "lib/atom/toolbox";
import React from "react";
import { useRecoilState } from "recoil";

const tools = ["Text field", "Button", "Box"];

export const Components = () => {
  const [, setSelectTool] = useRecoilState(toolboxAtom);

  return (
    <List
      sx={{ width: "100%", minWidth: 200, bgcolor: "background.paper" }}
      component="nav"
      subheader={<ListSubheader component="div">Toolbox</ListSubheader>}
    >
      {tools.map((t) => (
        <ListItemButton onClick={() => setSelectTool(t)}>
          <ListItemText primary={t} />
        </ListItemButton>
      ))}
    </List>
  );
};
