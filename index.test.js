const ft = require("./index.js");
const log = (name, value) => {
  console.log(`${name.toUpperCase()} :- ${value} (type: ${ft.type(value)})`);
};

log("number", ft.number("10")); // 10
log("number", ft.float("8.102")); // 8.102
log("array (will be string)", ft.array("Hello").join(" ")); // [ 'H', 'e', 'l', 'l', 'o' ]
log("undefined_check", ft.isUndefined(undefined)); // true
log("null_check", ft.isNull(null)); // true
log("type_check", ft.check(100, "number")); // true
log("type_check", ft.check(100, "string")); // false
