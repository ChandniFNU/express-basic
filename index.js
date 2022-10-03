const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("It worked!, My Name is Chandni");
});

app.listen(3000);
