import React from "react";

import { Button, Container, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

import PageContainer from "../../components/PageContainer";
import { pageLink } from "../../constants/link";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(pageLink.schedule);
  };

  return (
    <PageContainer>
      <Container maxWidth="sm" sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
        <Stack spacing={2} width="100%">
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              borderRadius: 28,
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
            }}
            onClick={handleClick}
          >
            ログイン
          </Button>
        </Stack>
      </Container>
    </PageContainer>
  );
};

export default LoginPage;
