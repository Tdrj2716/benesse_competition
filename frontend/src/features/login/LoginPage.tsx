import React from "react";

import { Box, Button, Container, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Appbar from "../../components/Appbar";
import { pageLink } from "../../constants/link";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(pageLink.schedule);
  };

  return (
    <Box
      sx={{
        margin: 0,
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        bgcolor: "#f3e5f5",
      }}
    >
      <Appbar title="Focus Lecture" />
      <Container maxWidth="sm" sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
        <Stack spacing={2} width="100%">
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              borderRadius: 28,
              bgcolor: "#673ab7",
              "&:hover": { bgcolor: "#5e35b1" },
            }}
            onClick={handleClick}
          >
            新規登録の方はこちらから
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            sx={{
              borderRadius: 28,
              borderColor: "#673ab7",
              color: "#673ab7",
              "&:hover": { borderColor: "#5e35b1", color: "#5e35b1" },
            }}
            onClick={handleClick}
          >
            ログイン
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default LoginPage;
