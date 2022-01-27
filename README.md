CLI RPN Calculator
==================

# Prerequestites

* Node >= 12.0

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

# Use API

```js
const { rpn } = require('.');
rpn.push(5);
const result = rpn.get();
console.log(result);
rpn.clear();
```

# Commentary


* A high-level description of your solution
* Reasoning behind your technical choices, including architectural
* Trade-offs you might have made, anything you left out, or what you might do differently if you were to spend additional time on the project