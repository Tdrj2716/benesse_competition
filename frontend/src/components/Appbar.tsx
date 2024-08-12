import React from "react";

import { AppBar, Avatar, Stack, Toolbar, Typography } from "@mui/material";

import { User } from "../types/user";

interface AppbarProps {
  title?: string;
  user?: User;
}

const Appbar: React.FC<AppbarProps> = (props: AppbarProps) => {
  const { title, user } = props;

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title ?? "Website"}
          </Typography>
          <Stack direction="row" spacing={2}>
            <Avatar>O</Avatar>
            {user && (
              <Stack direction="column" justifyContent="flex-end">
                <Typography variant="body1">{user.userName}</Typography>
                <Typography variant="subtitle2">{user.score} Point</Typography>
              </Stack>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
      {/* For avoiding invisible content behind Appbar, adding a second Toolbar component */}
      <Toolbar />
    </>
  );
};

export default Appbar;
