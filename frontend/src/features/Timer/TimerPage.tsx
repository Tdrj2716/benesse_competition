import React from "react";

import { Button, CircularProgress, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import PageContainer from "../../components/PageContainer";
import { pageLink } from "../../constants/link";

const TimerPage: React.FC = () => {
  const navigate = useNavigate();
  const backToSchedule = () => navigate(pageLink.schedule);

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
          value={75}
          sx={{
            color: "#673ab7",
            position: "absolute",
          }}
        />
        <Typography variant="h2" component="div" sx={{ mb: 2 }}>
          1:15:23
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
