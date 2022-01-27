CLI RPN Calculator
==================

# Prerequisites

* Node >= 12.0
* Browser

# Run CLI

```js
cd ./rpn-code-test
node .
> 5 6 9 /
  0.66666
```

# Testing

Run default test with cases listed at [gist](https://gist.github.com/dennisbaskin/5979ff6a0d8c1e90b59d060155862767):

```js
yarn test
```

# Basic API

```js
const rpn = require('./rpn-code-test');
rpn.push(5);
const result = rpn.get();
console.log(result); // 5
rpn.clear();
rpn.push("5 6 9 /");
console.log(rpn.get()); // 0.66
```

# Commentary

* Built a basic CLI implementing an RPN calculator, including optional usage as headless API in Node or in the browser.
* Kept everything as simple and modular as I could.
* If I could do this all again, I'd think about validation more. I wouldn't be surprised if I missed quite a few input scenarios that break this calculator.