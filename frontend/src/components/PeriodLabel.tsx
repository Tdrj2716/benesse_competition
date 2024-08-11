import React from "react";

import { Box, Paper, Typography } from "@mui/material";

import { Period } from "../types/schedule";

const PeriodLabel: React.FC<Period> = (props: Period) => {
  const { startTime, endTime, periodNumber } = props;

  return (
    <Paper>
      <Box
        p={1}
        height="90px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="body2">{startTime}</Typography>
        <Typography variant="body1" color="primary" fontWeight="bold" my={1}>
          {periodNumber}
        </Typography>
        <Typography variant="body2">{endTime}</Typography>
      </Box>
    </Paper>
  );
};

export default PeriodLabel;
