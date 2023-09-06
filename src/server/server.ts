import express from "express";

const server = express();

server.use(express.static("dist")); // server files in dist folder

server.use("/", (req, res) => {
  res.send("Hello");
});

server.listen("8080", "0.0.0.0", () => {
  // can use localhost instead of 0.0.0.0
  console.info("Express server is listening at http://0.0.0.0:8080");
});
