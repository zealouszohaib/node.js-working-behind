//observer pattern

const EventEmitter = require("events");


class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

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
