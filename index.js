const { rpn } = require('./lib/rpn.js');
const readline = require('readline')
const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

// main app loop
const loop = () => {
    interface.question("> ", input => {
        rpn.push(input);
        const result = rpn.get();
        if (result) {
            console.log(result)
        }
        loop();
    });
}

// listen for keyboard shortcuts
process.stdin.on('keypress', (str, key) => {
    if (key.ctrl && (key.name === 'd' || key.name === 'c' || key.name === 'q') || key.name === 'q') {
        interface.close()
    }
});

loop();

module.exports = {
    rpn
}