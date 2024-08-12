import React from "react";

import { Box, Typography, keyframes } from "@mui/material";

const scrollAnimation = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
`;

interface ScrollingTextProps {
  text: string;
  delay: number;
  duration: number;
  top: string;
}

const ScrollingText: React.FC<ScrollingTextProps> = React.memo((props: ScrollingTextProps) => {
  const { text, delay, duration } = props;
  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        whiteSpace: "nowrap",
        position: "absolute",
        top: 16,
      }}
    >
      <Box
        sx={{
          display: "inline-block",
          paddingLeft: "100%",
          animation: `${scrollAnimation} linear`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
        }}
      >
        <Typography variant="h3">{text}</Typography>
      </Box>
    </Box>
  );
});

export default ScrollingText;
