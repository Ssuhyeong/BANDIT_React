import { Box, Typography } from "@mui/material";

import score from "../assets/score.jpg";

const MainPage = () => {
  return (
    <Box
      sx={{
        width: "95%",
        height: "90vh",
        borderRadius: "10px",
      }}
      style={{ backgroundImage: `url(${score})`, backgroundSize: "cover" }}
    >
      <Typography
        sx={{
          fontSize: "100px",
          mt: "80px",
          ml: "80px",
          fontWeight: 600,
          color: "white",
        }}
      >
        딥러닝
      </Typography>
      <Typography
        sx={{
          fontSize: "100px",

          ml: "80px",
          fontWeight: 600,
          color: "white",
        }}
      >
        음원채보
      </Typography>
      <Typography
        sx={{
          fontSize: "100px",

          ml: "80px",
          fontWeight: 600,
          color: "white",
        }}
      >
        프로그램
      </Typography>
    </Box>
  );
};

export default MainPage;
