import {
  Divider,
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
      <Divider />
      {tools.map((t) => (
        <ListItemButton sx={{ height: 32 }} onClick={() => setSelectTool(t)}>
          <ListItemText
            primary={t}
            primaryTypographyProps={{ fontSize: 14  }}
          />
        </ListItemButton>
      ))}
    </List>
  );
};
