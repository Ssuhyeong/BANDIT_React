import React, { Component } from "react";
import { DropzoneArea } from "mui-file-dropzone";
import { Card } from "@mui/material";

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
      <Card sx={{ width: "500px", padding: "20px", position: "absolute" }}>
        <DropzoneArea onChange={this.handleChange.bind(this)} />
      </Card>
    );
  }
}

export default Upload;
