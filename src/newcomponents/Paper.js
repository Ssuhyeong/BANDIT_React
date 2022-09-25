import { Box } from "@mui/material";

const Paper = (props) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxHeight: "100%",
        border: "1px solid #E6E7E9",
        borderRadius: "10px",
        background: "#FFFFFF",
        overflow: "auto",
        ...props.sx,
      }}
    >
      {props.children}
    </Box>
  );
};

export default Paper;
