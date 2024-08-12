import React from "react";

import { Box } from "@mui/material";

import { User } from "../types/user";
import Appbar from "./Appbar";

interface Prop {
  user?: User;
  children: React.ReactNode;
}

const PageContainer: React.FC<Prop> = ({ user, children }) => {
  return (
    <Box margin={0} display="flex" flexDirection="column" minHeight="100vh">
      <Appbar title="Focus Lecture" user={user} />
      {children}
    </Box>
  );
};

export default PageContainer;
