const { Fast_Turtle } = require("./index.js");
const ft = new Fast_Turtle();

let string = "10";
console.log(ft.number(string)); // 10

let string2 = "8.102";
console.log(ft.float(string2)); // 8.102

let string3 = "Hello";
console.log(ft.array(string3)); // [ 'H', 'e', 'l', 'l', 'o' ]

let u = undefined;
let n = null;
console.log(ft.isUndefined(u)); // true
console.log(ft.isNull(n)); // true


let number = 1;
console.log(ft.checkType(number, "number")); // true
console.log(ft.checkType(number, "string")); // false




