const fs = require("fs");

const server = require("http").createServer();

server.on("request", (req, res) => {
  fs.readFile("test.txt", (err, data) => {
    if (err) console.log(err);

    res.end(data);
  });
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening on port 8000");
});


//