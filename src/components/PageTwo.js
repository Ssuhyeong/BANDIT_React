import { Box, Typography } from "@mui/material";

import score from "../assets/score2.png";
import phone from "../assets/hand.png";

const PageTwo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
        overflos: "hidden",
      }}
    >
      <Box
        sx={{
          width: "50%",
          height: "90vh",
          margin: "30px",
          borderRadius: "10px",
          background: "#F5F5F5",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "20px",
            fontWeight: 500,
            mt: "40px",
          }}
        >
          Seperation
        </Typography>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "35px",
            fontWeight: 600,
            mt: "25px",
          }}
        >
          딥러닝을 활용해
        </Typography>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "35px",
            fontWeight: 600,
          }}
        >
          음원을 악기별로 분리
        </Typography>
        <Box
          sx={{
            width: "70%",
            height: "60%",
            mt: "30px",
            mb: "200px",
            ml: "80px",
            overflow: "hidden",
          }}
          style={{ backgroundImage: `url(${phone})`, backgroundSize: "cover" }}
        ></Box>
      </Box>
      <Box
        sx={{
          width: "50%",
          height: "90vh",
          margin: "30px",
          borderRadius: "10px",
          background: "#F5F5F5",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "20px",
            fontWeight: 500,
            mt: "40px",
          }}
        >
          Deeplearning
        </Typography>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "35px",
            fontWeight: 600,
            mt: "25px",
          }}
        >
          딥러닝을 활용해
        </Typography>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            fontSize: "35px",
            fontWeight: 600,
          }}
        >
          원하는 악보를 채보
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "70%",
            mt: "10px",
          }}
          style={{ backgroundImage: `url(${score})`, backgroundSize: "cover" }}
        ></Box>
      </Box>
    </Box>
  );
};

export default PageTwo;
