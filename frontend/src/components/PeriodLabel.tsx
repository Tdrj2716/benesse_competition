import React from "react";

import { Box, Typography } from "@mui/material";

interface PeriodLabelProps {
  startTime: string;
  endTime: string;
  period: number;
}

const PeriodLabel: React.FC<PeriodLabelProps> = (props: PeriodLabelProps) => {
  const { startTime, endTime, period } = props;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: 2 }}>
      <Typography variant="body2">{startTime}</Typography>
      <Typography variant="body1" color="primary" fontWeight="bold" my={1}>
        {period}
      </Typography>
      <Typography variant="body2">{endTime}</Typography>
    </Box>
  );
};

export default PeriodLabel;
