import { DayOfWeek, LectureBase, Schedule } from "../../types/schedule";

type LectureMap = {
  [key in DayOfWeek]: (LectureBase | undefined)[];
};

export const getMappedLectures = (schedule: Schedule): LectureMap => {
  const m = Object.fromEntries(
    schedule.lectureDays.map((day) => [day, Array(schedule.periods.length).fill(undefined)]),
  ) as LectureMap;

  for (const lec of schedule.lectures) {
    m[lec.dayOfWeek][lec.periodNumber - 1] = {
      lectureName: lec.lectureName,
      lectureLink: lec.lectureLink,
      teacherName: lec.teacherName,
    };
  }
  return m;
};
