import { Box, Button, Typography, TextField } from "@mui/material";

const CompanyModal = () => {
  return (
    <Box
      sx={{
        height: "421px",
        width: "580px",
        borderRadius: "8px",
        background: "#FFF",
        border: "1px solid #121212",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "71px",
          ml: "20px",
          fontWeight: 600,
          fontSize: "18px",
        }}
      >
        제품정보 변경
      </Box>
      <Box
        sx={{
          flexDirection: "column",
          justifyContent: "center",
          height: "237px",
          background: "#F8F8FA",
          borderTop: "1px solid #E6E7E9",
          borderBottom: "1px solid #E6E7E9",
          padding: "20px",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Typography sx={{ fontWeight: 600, fontSize: "13px", mb: "10px" }}>
            모델
          </Typography>
          <TextField
            inputProps={{
              style: {
                padding: "11px",
                fontSize: "13px",
                fontWeight: 500,
                width: "520px",
              },
            }}
          />
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography sx={{ fontWeight: 600, fontSize: "13px", my: "10px" }}>
            IMEI
          </Typography>
          <TextField
            inputProps={{
              style: {
                padding: "11px",
                fontSize: "13px",
                fontWeight: 500,
                width: "520px",
              },
            }}
          />
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography sx={{ fontWeight: 600, fontSize: "13px", my: "10px" }}>
            USIM
          </Typography>
          <TextField
            inputProps={{
              style: {
                padding: "11px",
                fontSize: "13px",
                fontWeight: 500,
                width: "520px",
              },
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "72px",
        }}
      >
        <Box>
          <Button
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "4px",
              padding: "11px 12px",
              fontWeight: 500,
              fontSize: "14px",
              color: "#DC2626",
              width: "67px",
              height: "40px",
              border: "1px solid #DC2626",
              ml: "16px",
            }}
          >
            삭제
          </Button>
        </Box>
        <Box
          sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        >
          <Button
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "4px",
              padding: "11px 12px",
              fontWeight: 500,
              fontSize: "14px",
              color: "#000000",
              width: "67px",
              height: "40px",
              border: "1px solid #E6E7E9",
            }}
          >
            취소
          </Button>
          <Button
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#3855B3",
              borderRadius: "4px",
              padding: "11px 12px",
              fontWeight: 500,
              fontSize: "14px",
              color: "#FFFFFF",
              width: "67px",
              height: "40px",
              mx: "16px",
            }}
          >
            확인
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CompanyModal;
