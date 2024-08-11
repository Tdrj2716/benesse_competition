import React from "react";

import { Box, Stack } from "@mui/material";

import ClassCard from "../../components/ClassCard";
import PeriodLabel from "../../components/PeriodLabel";
import WeekdayLabel from "../../components/WeekdayLabel";
import { Schedule } from "../../types/schedule";
import { getMappedLectures } from "./utils";

type ScheduleTableProps = Schedule;

const ScheduleTable: React.FC<ScheduleTableProps> = (props: ScheduleTableProps) => {
  const { lectureDays, periods } = props;
  const scheduleMap = getMappedLectures(props);
  console.log(scheduleMap);

  return (
    <Box width="fullWidth" display="flex" justifyContent="center" overflow="auto">
      <Stack direction="column" spacing={1} width="fit-content" padding={4}>
        <Stack direction="row" spacing={1} justifyContent="flex-end">
          {lectureDays.map((day) => (
            <WeekdayLabel key={day} day={day} />
          ))}
        </Stack>

        {periods.map((period, index) => (
          <Stack
            key={index}
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={1}
          >
            <PeriodLabel {...period} />
            {lectureDays.map((day) => (
              <ClassCard key={`${day}-${index}`} {...scheduleMap[day][period.periodNumber - 1]} />
            ))}
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default ScheduleTable;
