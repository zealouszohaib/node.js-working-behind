//observer pattern

const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("newSale", () => {
  console.log("there was a new sale!");
});

myEmitter.on("newSale", () => {
  console.log("customer name: John Doe");
});

myEmitter.on("newSale", (stock) =>
  console.log(`there are ${stock} left in the market`)
);

myEmitter.emit("newSale",9);
