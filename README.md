CLI RPN Calculator
==================

# Prerequisites

* Node >= 12.0
* Browser

# Testing

```js
npm run test
```

# Run CLI

```js
node .
> 5
  5
```

# Headless usage

```js
const rpn = require('./index.js');
rpn.push(5);
const result = rpn.get();
console.log(result); // 5
rpn.clear();
rpn.push("5 6 9 /")
console.log(rpn.get()); // 0.66
```

# Commentary


* Built a basic CLI implementing an RPN calculator, including optional usage as headless API in Node or in the browser.
* Kept everything as simple and modular as I could.
* If I could do this all again, I'd think about validation more. I wouldn't be surprised if I missed quite a few input scenarios that break this calculator.