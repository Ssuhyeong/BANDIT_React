import React, { Component } from "react";
import { DropzoneArea } from "mui-file-dropzone";
import { Card, Button } from "@mui/material";

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    };
  }
  handleChange(files) {
    this.setState({
      files: files,
    });
  }
  render() {
    return (
      <Card
        sx={{
          width: "500px",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <DropzoneArea onChange={this.handleChange.bind(this)} />
        <Button
          sx={{
            width: "50px",
            height: "50px",
            mt: "15px",
            ml: "430px",
          }}
        >
          업로드
        </Button>
      </Card>
    );
  }
}

export default Upload;
