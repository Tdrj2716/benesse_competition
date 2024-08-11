import React from "react";

import { Link, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { pageLink } from "../constants/link";

// import { Lecture } from "../types/schedule";

interface ClassCardProps {
  lectureName?: string;
  lectureLink?: string;
}

const ClassCard: React.FC<ClassCardProps> = (props: ClassCardProps) => {
  const { lectureName, lectureLink } = props;
  const isValidProps = lectureName !== undefined && lectureLink !== undefined;

  const navigate = useNavigate();
  const navigateToTimerPage = () => navigate(pageLink.timer);

  return (
    <Paper
      variant="outlined"
      sx={{
        width: "140px",
        height: "90px",
        paddingTop: 2,
        bgcolor: isValidProps ? "white" : "#f0f0f0",
      }}
    >
      {isValidProps && (
        <>
          <Typography variant="h6" component="div" align="center" gutterBottom>
            {lectureName}
          </Typography>
          <Link href={lectureLink} underline="hover" target="_blank" onClick={navigateToTimerPage}>
            オンライン授業へ
          </Link>
        </>
      )}
    </Paper>
  );
};

export default ClassCard;
