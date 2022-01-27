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
        return Number(this.output[this.output.length - 1])
    },
    clear() {
        this.state = [];
        this.output = [];
    },
    push(val) {
        String(val).indexOf(" ") > -1 ?
            val.trim().split(" ").forEach(v => {
                this.state.push(Number(v) ? Number(v) : v);
            }) : this.state.push(Number(val) ? Number(val) : val);

        this.calculate(this.state);
    },
    calculate(e) {
        let arr = [];
        e.forEach(symbol => {
            arr.push(
                this.operators[symbol]
                    ? this.operators[symbol](...arr.splice(-2))
                    : symbol
            );
        });
        this.output = arr;
    }
}

module.exports = rpn