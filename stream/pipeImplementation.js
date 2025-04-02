const fs = require("fs");

const server = require("http").createServer();

server.on("request", (req, res) => {
  const readable = fs.createReadStream("test.txt");

  readable.pipe(res);

  //readableStream.pip(writableStream);
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening on port 8000");
});

//
