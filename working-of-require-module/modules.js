// console.log(arguments);
// console.log(require("module").wrapper);


//module.exports
const C = require("./test-module-1");
const calc1 = new C();

console.log(calc1.add(2, 5));


//exports
const {add, subtract, multiply, divide} = require("./test-module-2");
console.log(add(2, 5));
console.log(subtract(2, 5));
console.log(multiply(2, 5));
console.log(divide(2, 5));


//cahing

require("./test-module-3")();
require("./test-module-3")();       
require("./test-module-3")(); 
require("./test-module-3")(); 
require("./test-module-3")(); 