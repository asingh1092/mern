import express from "express";
// @ts-ignore
import os from "os";

import config from "./config";
import apiRouter from "./api-router";

const server = express();

server.use(express.static("dist")); // server files in dist folder

server.set("view engine", "ejs"); // set templating as EJS

server.use("/api", apiRouter);
server.get("/", (req, res) => {
  // render html using EJS
  res.render("index", {
    // initial content shows up before react does and webpack does it's bundling
    initialContent: "Loading...",
  });
});

server.listen(config.PORT, config.HOST, () => {
  // can use localhost instead of 0.0.0.0
  console.info(
    `Express server is listening at ${config.SERVER_URL}`,
    `Free Mem:${os.freemem() / 1024 / 1024}`,
  );
});
