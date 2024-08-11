import React, { useEffect, useState } from "react";

import { Button, CircularProgress, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import PageContainer from "../../components/PageContainer";
import { pageLink } from "../../constants/link";
import "./Circle.css";

const formatTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
};

const TimerPage: React.FC = () => {
  const navigate = useNavigate();
  const backToSchedule = () => navigate(pageLink.schedule);

  const limit = 90 * 60;
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => setTimer(timer + 1), 1000);

    return () => clearInterval(intervalId);
  }, [timer]);

  return (
    <PageContainer>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        sx={{
          marginTop: 20,
          position: "relative",
          display: "inline-flex",
        }}
      >
        <CircularProgress
          size={480}
          thickness={1}
          variant="determinate"
          value={Math.min((timer / limit) * 100, 100)}
          sx={{
            color: "#673ab7",
            position: "absolute",
          }}
        />
        <Typography variant="h2" component="div" sx={{ mb: 2 }}>
          {formatTime(timer)}
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 4 }}>
          あと一息です！
        </Typography>
        <Grid container direction="row" justifyContent="center" spacing={2}>
          <Grid item>
            <Button
              variant="contained"
              sx={{ bgcolor: "#673ab7", "&:hover": { bgcolor: "#5e35b1" } }}
            >
              応援を流す
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              sx={{ color: "#673ab7", borderColor: "#673ab7" }}
              onClick={backToSchedule}
            >
              終了する
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default TimerPage;
