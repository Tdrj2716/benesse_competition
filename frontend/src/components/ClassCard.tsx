import React from "react";

import { Link, Paper, Typography } from "@mui/material";

interface ClassCardProps {
  classTitle: string;
  href: string;
}

const ClassCard: React.FC<ClassCardProps> = (props: ClassCardProps) => {
  const { classTitle, href } = props;
  return (
    <Paper variant="outlined" sx={{ width: "140px", height: "90px" }}>
      <Typography variant="h6" component="div" align="center" gutterBottom>
        {classTitle}
      </Typography>
      <Link
        href={href}
        underline="hover"
        target="_blank"
        sx={{
          color: "text.secondary",
          "&:hover": {
            color: "primary.main",
          },
        }}
      >
        オンライン授業へ
      </Link>
    </Paper>
  );
};

export default ClassCard;
