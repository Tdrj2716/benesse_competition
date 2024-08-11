import React from "react";

import { Box, Stack } from "@mui/material";

import ClassCard from "../../components/ClassCard";
import PeriodLabel from "../../components/PeriodLabel";
import WeekdayLabel from "../../components/WeekdayLabel";
import { weekdays } from "../../constants/schedule";
import { Period } from "../../types/schedule";

const periods: Period[] = [
  { startTime: "08:45", endTime: "10:15", periodNumber: 1 },
  { startTime: "10:30", endTime: "12:00", periodNumber: 2 },
  { startTime: "13:15", endTime: "14:45", periodNumber: 3 },
  { startTime: "15:00", endTime: "16:30", periodNumber: 4 },
  { startTime: "16:45", endTime: "18:15", periodNumber: 5 },
];

const ScheduleTable: React.FC = () => {
  const days = weekdays.slice(0, 5);
  const getRandomLecture = () => {
    const res = Math.random();
    if (res <= 0.3) return undefined;

    return {
      lectureName: `授業${Math.round(res * 10)}`,
      lectureLink: "https://us02web.zoom.us/j/84574320228?pwd=2hfbbwCOGQn0OeiySP6tPjkvgm5PeU.1",
    };
  };

  return (
    <Box width="fullWidth" display="flex" justifyContent="center" overflow="auto">
      <Stack direction="column" spacing={1} width="fit-content" padding={4}>
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
              <ClassCard key={`${day}-${index}`} {...getRandomLecture()} />
            ))}
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default ScheduleTable;
