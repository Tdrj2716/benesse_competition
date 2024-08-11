import React from "react";

import { Box, Divider, Typography } from "@mui/material";

import Appbar from "../../components/Appbar";
import ScheduleTable from "./ScheduleTable";

const ClassScheduleTable: React.FC = () => {
  return (
    <Box
      sx={{
        marginX: 0,
        marginY: 2,
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        bgcolor: "#f3e5f5",
      }}
    >
      <Appbar title="Focus Lecture" />
      <Box maxWidth="md" gap={2}>
        <Typography variant="h6">時間割</Typography>
        <Divider />
        <ScheduleTable />
      </Box>
    </Box>
  );
};

export default ClassScheduleTable;
