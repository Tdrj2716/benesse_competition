import React from "react";

import { Box, Divider, Typography } from "@mui/material";

import Appbar from "../../components/Appbar";
import ScheduleTable from "./ScheduleTable";

const ClassScheduleTable: React.FC = () => {
  return (
    <Box
      margin={0}
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      sx={{
        bgcolor: "#f3e5f5",
      }}
    >
      <Appbar title="Focus Lecture" />
      <Box maxWidth="fullWidth" gap={2}>
        <Typography variant="h6">時間割</Typography>
        <Divider />
        <ScheduleTable />
      </Box>
    </Box>
  );
};

export default ClassScheduleTable;
