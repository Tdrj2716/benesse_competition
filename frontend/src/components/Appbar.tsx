import React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Avatar, IconButton, Toolbar, Typography } from "@mui/material";

interface AppbarProps {
  title?: string;
}

const Appbar: React.FC<AppbarProps> = (props: AppbarProps) => {
  const { title } = props;

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title ?? "Website"}
          </Typography>
          <Avatar>O</Avatar>
        </Toolbar>
      </AppBar>
      {/* For avoiding invisible content behind Appbar, adding a second Toolbar component */}
      <Toolbar />
    </>
  );
};

export default Appbar;
