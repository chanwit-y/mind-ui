import type { NextPage } from "next";
import { ReactNode, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import { BoxAdusting, BoxProps, BoxType } from "components/box";
import { useRecoilState } from "recoil";
import { toolboxAtom, focusCompentAtom } from "lib/atom/toolbox";
import { uuid } from "uuidv4";

const Home: NextPage = () => {
  const [selectTool, setSelectTool] = useRecoilState(toolboxAtom);
  const [focus, setFocus] = useRecoilState(focusCompentAtom);
  const [prop, setProp] = useState<BoxType>({ id: uuid() } as BoxType);

  useEffect(() => setFocus(prop.id), [prop.id]);

  //effect when selectTool, focus change
  useEffect(() => {
    if (selectTool !== "") {
      const updateChildrenById = (
        id: string,
        data: BoxType,
        value: BoxType
      ) => {
        if (data.id == id) {
          data.childrens =
            data?.childrens !== undefined
              ? [...data.childrens, { ...value }]
              : [value];
        }
        if (data.childrens !== undefined && data.childrens.length > 0) {
          for (let i = 0; i < data.childrens.length; i++) {
            data.childrens[i] = updateChildrenById(
              id,
              data.childrens[i],
              value
            );
          }
        }

        return data;
      };

      //check focus id and add component to children
      const id = uuid();
      const reactNode = {
        id: id,
        reactNode: <BoxAdusting isPerview={true} prop={{ id }} />,
      };

      setProp({...updateChildrenById(focus, prop, reactNode)});
      setSelectTool("");
    }
  }, [selectTool, focus]);

  useEffect(() => {
    console.log(prop);
  }, [prop]);

  return (
    <Box p={1} height="100vh" display="flex" justifyContent="space-around">
      <Box
        mx={1}
        p={2}
        width="20%"
        height="100%"
        bgcolor={grey[100]}
        display="flex"
        flexDirection="column"
      >
        <button
          onClick={() => {
            setProp((perv) => ({ ...perv, reactNode: [] }));
          }}
        >
          Clear
        </button>
        {focus}
      </Box>
      <Box
        mx={1}
        p={2}
        width="55%"
        height="100%"
        bgcolor={grey[100]}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <BoxAdusting isPerview={true} prop={prop} />
      </Box>
      <Box
        mx={1}
        p={2}
        width="25%"
        height="100%"
        bgcolor={grey[100]}
        display="flex"
        flexDirection="column"
        sx={{
          overflowY: "auto",
        }}
      >
        <BoxProps prop={prop} setProp={setProp} />
      </Box>
    </Box>
  );
};

export default Home;
