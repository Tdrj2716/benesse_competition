import { Lecture, Period, Schedule } from "../types/schedule";

export const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

const sampleLectures: Lecture[] = [
  {
    dayOfWeek: "Monday",
    periodNumber: 1,
    lectureName: "現代社会学概論",
    teacherName: "山田 太郎",
    lectureLink: "https://example.com",
    attendances: [],
  },
  {
    dayOfWeek: "Monday",
    periodNumber: 3,
    lectureName: "経済学原論",
    teacherName: "鈴木 花子",
    lectureLink: "https://us02web.zoom.us/j/84574320228?pwd=2hfbbwCOGQn0OeiySP6tPjkvgm5PeU.1",
    attendances: [],
  },
  {
    dayOfWeek: "Tuesday",
    periodNumber: 2,
    lectureName: "量子力学入門",
    teacherName: "佐藤 次郎",
    lectureLink: "https://us02web.zoom.us/j/84574320228?pwd=2hfbbwCOGQn0OeiySP6tPjkvgm5PeU.1",
    attendances: [],
  },
  {
    dayOfWeek: "Tuesday",
    periodNumber: 4,
    lectureName: "日本文学史",
    teacherName: "高橋 美咲",
    lectureLink: "https://us02web.zoom.us/j/84574320228?pwd=2hfbbwCOGQn0OeiySP6tPjkvgm5PeU.1",
    attendances: [],
  },
  {
    dayOfWeek: "Wednesday",
    periodNumber: 1,
    lectureName: "比較文化論",
    teacherName: "田中 健太",
    lectureLink: "https://us02web.zoom.us/j/84574320228?pwd=2hfbbwCOGQn0OeiySP6tPjkvgm5PeU.1",
    attendances: [],
  },
  {
    dayOfWeek: "Wednesday",
    periodNumber: 3,
    lectureName: "統計学基礎",
    teacherName: "渡辺 真理",
    lectureLink: "https://us02web.zoom.us/j/84574320228?pwd=2hfbbwCOGQn0OeiySP6tPjkvgm5PeU.1",
    attendances: [],
  },
  {
    dayOfWeek: "Thursday",
    periodNumber: 2,
    lectureName: "プログラミング基礎",
    teacherName: "小林 誠",
    lectureLink: "https://us02web.zoom.us/j/84574320228?pwd=2hfbbwCOGQn0OeiySP6tPjkvgm5PeU.1",
    attendances: [],
  },
  {
    dayOfWeek: "Thursday",
    periodNumber: 4,
    lectureName: "心理学入門",
    teacherName: "中村 愛",
    lectureLink: "https://us02web.zoom.us/j/84574320228?pwd=2hfbbwCOGQn0OeiySP6tPjkvgm5PeU.1",
    attendances: [],
  },
  {
    dayOfWeek: "Friday",
    periodNumber: 1,
    lectureName: "環境生態学",
    teacherName: "加藤 洋平",
    lectureLink: "https://us02web.zoom.us/j/84574320228?pwd=2hfbbwCOGQn0OeiySP6tPjkvgm5PeU.1",
    attendances: [],
  },
  {
    dayOfWeek: "Friday",
    periodNumber: 3,
    lectureName: "国際関係論",
    teacherName: "木村 さくら",
    lectureLink: "https://us02web.zoom.us/j/84574320228?pwd=2hfbbwCOGQn0OeiySP6tPjkvgm5PeU.1",
    attendances: [],
  },
  {
    dayOfWeek: "Friday",
    periodNumber: 5,
    lectureName: "デジタルメディア論",
    teacherName: "斎藤 健一",
    lectureLink: "https://us02web.zoom.us/j/84574320228?pwd=2hfbbwCOGQn0OeiySP6tPjkvgm5PeU.1",
    attendances: [],
  },
  {
    dayOfWeek: "Wednesday",
    periodNumber: 5,
    lectureName: "哲学概論",
    teacherName: "石田 哲也",
    lectureLink: "https://us02web.zoom.us/j/84574320228?pwd=2hfbbwCOGQn0OeiySP6tPjkvgm5PeU.1",
    attendances: [],
  },
];

const samplePeriods: Period[] = [
  { startTime: "08:45", endTime: "10:15", periodNumber: 1 },
  { startTime: "10:30", endTime: "12:00", periodNumber: 2 },
  { startTime: "13:15", endTime: "14:45", periodNumber: 3 },
  { startTime: "15:00", endTime: "16:30", periodNumber: 4 },
  { startTime: "16:45", endTime: "18:15", periodNumber: 5 },
];

export const dummySchedule: Schedule = {
  periods: samplePeriods,
  lectures: sampleLectures,
  lectureDays: weekdays.slice(0, 5),
};
