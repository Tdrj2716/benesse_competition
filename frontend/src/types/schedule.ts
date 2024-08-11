import { weekdays } from "../constants/schedule";

export type DayOfWeek = (typeof weekdays)[number];

export interface LectureTime {
  dayOfWeek: DayOfWeek;
  periodNumber: number;
}

export interface LectureBase {
  lectureName: string;
  teacherName?: string;
  lectureLink?: string;
}

export type Lecture = LectureTime &
  LectureBase & {
    description?: string;
    attendances: Attendance[];
  };

export interface Attendance {
  date: string;
  comment: string;
}

export interface Period {
  startTime: string;
  endTime: string;
  periodNumber: number;
}

export interface Schedule {
  periods: Period[];
  lectureDays: DayOfWeek[];
  lectures: Lecture[];
}
