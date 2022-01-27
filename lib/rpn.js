const rpn = {
    state: [],
    output: [],
    operators: {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b
    },
    get() {
        const lastState = this.output[this.output.length - 1];
        return Number(lastState);
    },
    clear() {
        this.state = [];
        this.output = [];
    },
    push(val) {
        String(val).indexOf(" ") > -1 ?
            val.split(" ").forEach(v => {
                this.state.push(Number(v) ? Number(v) : v);
            }) : this.state.push(Number(val) ? Number(val) : val);

        this.calculate(this.state);
    },
    calculate(exp) {
        let arr = [];
        exp.forEach(op => {
            arr.push(
                this.operators[op]
                    ? this.operators[op](...arr.splice(-2))
                    : op
            );
        });
        this.output = arr;
    }
}

module.exports = rpn