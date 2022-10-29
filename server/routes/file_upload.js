const express = require("express");
const router = express.Router();
const { PythonShell } = require("python-shell");
const db = require("../config/db");

router.post("/fileupload", (req, res) => {
  let options = {
    scripPath: "/",
    args: req.query.ip,
  };

  PythonShell.run("main.py", options, (err, data) => {
    if (err) throw err;
    if (data) {
      console.log('good')
    }
  });
});

module.exports = router;
