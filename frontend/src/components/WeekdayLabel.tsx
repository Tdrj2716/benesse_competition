import React from "react";

import { Card, Typography } from "@mui/material";

import { DayOfWeek } from "../types/schedule";

interface WeekdayLabelProps {
  day: DayOfWeek;
}

const getWeekdayString = (day: DayOfWeek): string => {
  switch (day) {
    case "Monday":
      return "月";
    case "Tuesday":
      return "火";
    case "Wednesday":
      return "水";
    case "Thursday":
      return "木";
    case "Friday":
      return "金";
    default:
      return "土";
  }
};

const WeekdayLabel: React.FC<WeekdayLabelProps> = (props: WeekdayLabelProps) => {
  const { day } = props;
  return (
    <Card
      variant="outlined"
      sx={{
        // borderRadius: '4px',
        width: "140px",
        height: "24px",
      }}
    >
      <Typography align="center" variant="body2">
        {getWeekdayString(day)}
      </Typography>
    </Card>
  );
};

export default WeekdayLabel;
