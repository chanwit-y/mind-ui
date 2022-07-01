import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import { BoxAdusting, BoxProps, BoxType } from "components/box";
import { useRecoilState } from "recoil";
import { toolboxAtom, focusCompentAtom } from "lib/atom/toolbox";
import { uuid } from 'uuidv4';

const Home: NextPage = () => {
  const [selectTool, setSelectTool] = useRecoilState(toolboxAtom);
  const [focus, setFocus] = useRecoilState(focusCompentAtom);
  const [prop, setProp] = useState<BoxType>({id: uuid()} as BoxType);

  useEffect(() => setFocus(prop.id), [prop.id])

  useEffect(() => {
    console.log(selectTool);
    if (selectTool !== "") {
      //check focus id and add component to children
      setProp((perv) => ({
        ...perv,
        childrens: perv?.childrens
          ? [...perv.childrens, <BoxAdusting isPerview={true} prop={{id: uuid()}} />]
          : [<BoxAdusting isPerview={true} prop={{id: uuid()}} />],
      }));
      setSelectTool("");
    }
  }, [selectTool]);

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
            setProp((perv) => ({ ...perv, childrens: [] }));
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
