import { Box, Typography, Grid } from "@mui/material";
import score from "../assets/score.jpg";
import Animation from "./Animation";

const SubPage2 = () => {
  return (
    <Box
      sx={{
        width: "95%",
        height: "90vh",
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
        밴드 세션별 자동 채보 서비스
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
        당신에게 필요한 음원의 악보를
      </Typography>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          fontSize: "35px",
          fontWeight: 600,
        }}
      >
        한번의 업로드로 편하게 다운로드
      </Typography>
      <Animation />
    </Box>
  );
};

export default SubPage2;
