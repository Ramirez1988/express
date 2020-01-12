const express = require("express");

const app = express();

app.use(express.static(__dirname + "/project"));


app.get("/", (req, res) => {

  let hour = new Date().getHours();
  if ((hour > 8) && (hour < 17)) {
    res.sendFile(__dirname + "/project/home.html")
  }
  else {
    res.sendFile(__dirname + "/project/outOfService.html")
  };
});


app.listen(3000, err => {
  if (err) console.log("server is not running");
  else console.log("the server is running");
});
