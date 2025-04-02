const fs = require("fs");

const server = require("http").createServer();

server.on("request", (req, res) => {
 
    const readable=fs.createReadStream("testtttt.txt");

    readable.on("data", (chunk) => {
        res.write(chunk);
    });

    readable.on('error', (err) => {
        console.log(err);

        res.statusCode = 500;
        res.end("File not found");
    });


});

// one problem with this approach is that that response sending back is much slower than the file reading.(BACK PRESSURE)
// so we need to use pipe method to send the data back to the client in a more efficient way.it automatically handles the data flow and back pressure.
// readable.pipe(res);

server.listen(8000, "127.0.0.1", () => {
  console.log("listening on port 8000");
});
