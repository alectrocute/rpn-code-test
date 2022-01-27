const rpn = require('./rpn.js');
const readline = require('readline');
const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
    if (key.ctrl && (key.name === 'd' || key.name === 'c' || key.name === 'q') || key.name === 'q') {
        interface.close()
    }
});

const cli = {
    run() {
        this.loop()
    },
    loop() {
        interface.question("> ", input => {
            rpn.push(input);
            const result = rpn.get();
            if (result) {
                console.log(result)
            }
            this.loop();
        });
    }

}

module.exports = cli;