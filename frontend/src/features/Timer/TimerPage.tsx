import React, { useMemo } from "react";

import { Button, CircularProgress, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import PageContainer from "../../components/PageContainer";
import ScrollingText from "../../components/ScrollingText";
import { pageLink } from "../../constants/link";
import { useCheerings, useTimeNotificaion } from "./useMessage";

const formatTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
};

const user = { userName: "User Name", score: 100 };

const TimerPage: React.FC = React.memo(() => {
  const navigate = useNavigate();
  const backToSchedule = () => navigate(pageLink.schedule);

  const limit = 90 * 60;
  const { timer, message } = useTimeNotificaion(limit);
  const { cheerings, triggerCheerings } = useCheerings();

  const scrollingTexts = useMemo(
    () =>
      cheerings.map((item: string, index: number) => {
        const delay = Math.round(Math.random() * 4);
        return (
          <ScrollingText
            key={`${item}-${index}`}
            text={item}
            delay={delay}
            duration={8}
            top={`${delay * 60}px`}
          />
        );
      }),
    [cheerings],
  );

  return (
    <PageContainer user={user}>
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
            position: "absolute",
          }}
        />
        {scrollingTexts}
        <Typography variant="h2" component="div" sx={{ mb: 2 }}>
          {formatTime(timer)}
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 4 }}>
          {message}
        </Typography>
        <Grid container direction="row" justifyContent="center" spacing={2}>
          <Grid item>
            <Button variant="contained" onClick={triggerCheerings}>
              応援を流す
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={backToSchedule}>
              終了する
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </PageContainer>
  );
});

export default TimerPage;
