const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  console.log(req.url);
  console.log("request received!");
  res.write("request received");
});

server.on("request", (req, res) => {
  console.log("another request received");
  res.end();
});

server.on("close", () => {
  console.log("server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("waiting for the requests...");
});
