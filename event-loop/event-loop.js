const fs = require("fs");
const crypto = require("crypto");

process.env.UV_THREADPOOL_SIZE = 2; //here we can set the size of thread pool

//they are not inside the event loop
setTimeout(() => console.log("Timer 1 finished"), 0);

setImmediate(() => console.log("Immediate 1 finished"));

const start = Date.now();



fs.readFile("test-file.txt", () => {
  console.log("I/O finished");
  console.log("----------------------");

  setTimeout(() => console.log("Timer 2 finished"), 0);
  setTimeout(() => console.log("Timer 3 finished"), 3000);

  setImmediate(() => console.log("Immediate 2 finished"));

  process.nextTick(() => console.log("Process.nextTick"));


  //they are not inside the event loop and they would in the thread pool
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log("Password encrypted: ", Date.now() - start);  // if we user sync version of this function then it will block the event loop
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log("Password encrypted: ", Date.now() - start);
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log("Password encrypted: ", Date.now() - start);
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log("Password encrypted: ", Date.now() - start);
  });
 
});
//they are not inside the event loop

console.log("Hello from the top-level code");
