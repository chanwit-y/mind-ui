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
    <Box display="flex">
      <Box
        m={2}
        p={2}
        width={400}
        height={500}
        bgcolor={grey[100]}
        display="flex"
        flexDirection="column"
      >
      </Box>
      <Box
        m={2}
        p={2}
        width={500}
        height={500}
        bgcolor={grey[100]}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <BoxAdusting prop={prop} />
      </Box>

      <Box
        m={2}
        p={2}
        width={300}
        height={500}
        bgcolor={grey[100]}
        display="flex"
        flexDirection="column"
      >
        <BoxProps prop={prop} setProp={setProp} />
      </Box>
    </Box>
  );
};

export default Home;
