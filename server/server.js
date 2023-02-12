const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/api", async (req, res) => {
  res.send({ message: "Message from the Server" });
});
app.get("*", async (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(3001, () => {
  console.log("server started on port 3001");
});
