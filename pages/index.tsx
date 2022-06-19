import type { NextPage } from "next";
import { useState } from "react";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import { BoxAdusting, BoxProps, BoxType } from "components/box";

const Home: NextPage = () => {
  const [prop, setProp] = useState<BoxType>({
    childrens: [
      <Box width={50} height={50} bgcolor="red">
        x
      </Box>,
      <Box width={50} height={50} bgcolor="blue"></Box>,
    ],
  } as BoxType);
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
      ></Box>
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
        <BoxAdusting prop={prop} />
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
          overflowY: "auto"
        }}
      >
        <BoxProps prop={prop} setProp={setProp} />
      </Box>
    </Box>
  );
};

export default Home;
