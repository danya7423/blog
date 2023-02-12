const express = require("express");
const http = require("http");
const generateHTML = require("./helpers/generateHTML");

const app = express();

app.use(express.static("public"));

app.get("*", async (req, res) => {
  try {
    let html;
    if (req.path == "/") {
      html = await generateHTML("home/index");
    } else {
      html = await generateHTML(req.path);
    }

    res.setHeader("Content-Type", "text/html");
    res.send(html);
  } catch (e) {
    const html = await generateHTML("service/page-404");

    res.setHeader("Content-Type", "text/html");
    res.send(html);
  }
});

const server = http.createServer(app);
server.listen(process.env.PORT || 3033);
