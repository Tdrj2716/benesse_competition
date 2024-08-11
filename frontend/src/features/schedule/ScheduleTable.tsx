import React from "react";

import { Box, Stack } from "@mui/material";

import ClassCard from "../../components/ClassCard";
import PeriodLabel from "../../components/PeriodLabel";
import WeekdayLabel from "../../components/WeekdayLabel";
import { weekdays } from "../../constants/schedule";

interface Period {
  startTime: string;
  endTime: string;
  period: number;
}

const periods: Period[] = [
  { startTime: "08:45", endTime: "10:15", period: 1 },
  { startTime: "10:30", endTime: "12:00", period: 2 },
  { startTime: "13:15", endTime: "14:45", period: 3 },
  { startTime: "15:00", endTime: "16:30", period: 4 },
  { startTime: "16:45", endTime: "18:15", period: 5 },
];

const ScheduleTable: React.FC = () => {
  const days = weekdays.slice(0, 5);

  return (
    <Box width="100%" justifyContent="space-between" margin={2} overflow="auto">
      <Stack direction="column" spacing={0} width="fit-content" padding={4}>
        <Stack direction="row" spacing={1} justifyContent="flex-end">
          {days.map((day) => (
            <WeekdayLabel key={day} day={day} />
          ))}
        </Stack>

        {periods.map((periodLabel, index) => (
          <Stack
            key={index}
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={1}
          >
            <PeriodLabel {...periodLabel} />
            {days.map((day) => (
              <Box key={`${day}-${index}`} sx={{ margin: 0 }}>
                {Math.random() > 0.3 ? (
                  <ClassCard classTitle={`授業 1`} href="#" />
                ) : (
                  <Box sx={{ width: "142px", height: "90px", bgcolor: "#f0f0f0" }} />
                )}
              </Box>
            ))}
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default ScheduleTable;
