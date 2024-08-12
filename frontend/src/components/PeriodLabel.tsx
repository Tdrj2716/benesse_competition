import React from "react";

import { Box, Paper, Typography } from "@mui/material";

import { cardHeight, cardVariant } from "../constants/styleVariables";
import { Period } from "../types/schedule";

const PeriodLabel: React.FC<Period> = (props: Period) => {
  const { startTime, endTime, periodNumber } = props;

  return (
    <Paper variant={cardVariant}>
      <Box
        p={1}
        height={cardHeight}
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
