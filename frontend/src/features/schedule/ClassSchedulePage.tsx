import React from "react";

import { Box, Divider, Typography } from "@mui/material";

import PageContainer from "../../components/PageContainer";
import { dummySchedule } from "../../constants/schedule";
import ScheduleTable from "./ScheduleTable";

const ClassScheduleTable: React.FC = () => {
  return (
    <PageContainer>
      <Box maxWidth="fullWidth" gap={2}>
        <Typography variant="h6">時間割</Typography>
        <Divider />
        <ScheduleTable {...dummySchedule} />
      </Box>
    </PageContainer>
  );
};

export default ClassScheduleTable;
