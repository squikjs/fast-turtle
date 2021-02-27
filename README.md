# _Fast-turtle_

Type-conversion at your fingertips.

## Installatiion

---

```
npm install fast-turtle
```

## Usage

---

```js
const ft = require("fast-turtle");

ft.number("10"); // 10
ft.float("8.102"); // 8.102
ft.array("Hello"); // [ 'H', 'e', 'l', 'l', 'o' ]
ft.isUndefined(undefined); // true
ft.isNull(null); // true
ft.check(100, "string"); // false
```
