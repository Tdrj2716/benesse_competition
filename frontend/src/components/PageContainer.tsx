import React from "react";

import { Box } from "@mui/material";

import Appbar from "./Appbar";

interface Prop {
  children: React.ReactNode;
}

const PageContainer: React.FC<Prop> = ({ children }) => {
  return (
    <Box margin={0} display="flex" flexDirection="column" minHeight="100vh">
      <Appbar title="Focus Lecture" />
      {children}
    </Box>
  );
};

export default PageContainer;
