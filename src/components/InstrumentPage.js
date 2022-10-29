import { Box, Typography, Button, Modal } from "@mui/material";
import ButtonBases from "./ButtonBases";

const InstrumentPage = () => {
  return (
    <Box
      sx={{
        height: "90vh",
        width: "90%",
      }}
    >
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          fontSize: "35px",
          fontWeight: 600,
        }}
      >
        당신의 악기를 선택하세요
      </Typography>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "400px",
          mt: "70px",
        }}
      >
        {/* <Box
          sx={{
            width: "400px",
            height: "100%",
            background: "red",
            margin: "10px",
            borderRadius: "20px",
          }}
          style={{ backgroundImage: `url(${Guitar})`, backgroundSize: "cover" }}
        >
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: "20px",
              fontSize: "40px",
              fontWeiht: 800,
              color: "white",
            }}
          >
            기타
          </Typography>
          <Button sx={{ display: "flex", justifyContent: "center" }}>
            업로드
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "400px",
            heigbackground: "red",
            margin: "10px",
            borderRadius: "20px",
          }}
          style={{ backgroundImage: `url(${Piano})`, backgroundSize: "cover" }}
        >
          <Typography
            sx={{
              mt: "20px",
              fontSize: "40px",
              fontWeiht: 800,
              colorht: "100%",
            : "white",
            }}
          >
            피아노
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "400px",
            height: "100%",
            background: "red",
            margin: "10px",
            borderRadius: "20px",
          }}
          style={{ backgroundImage: `url(${Drum})`, backgroundSize: "cover" }}
        >
          <Typography
            sx={{
              mt: "20px",
              fontSize: "40px",
              fontWeiht: 800,
              color: "white",
            }}
          >
            드럼
          </Typography>
        </Box> */}
        <ButtonBases />
      </Box>
    </Box>
  );
};

export default InstrumentPage;
