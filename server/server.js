const express = require('express')
const app = express();
const user_inform = require('./routes/user_inform.js')
// const file_upload = require('./routes/file_upload')
const cors = require("cors");

var corsOptions = {
  origin: [
    "http://localhost:3000",
    "http://localhsost:3001"
  ],
};

app.use(cors(corsOptions));

app.use("/user_inform", user_inform);
// app.use("/file_upload", file_upload);

const port = 3001;
app.listen(port, () =>
  console.log(`Node.js Server is running on port ${port}...`)
);