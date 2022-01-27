const rpn = require("./rpn.js");

const test = {
    run(manifests) {
        manifests.forEach((manifest, manifestIndex) => {
            manifest.forEach((testCase, testCaseIndex) => {
                rpn.push(testCase.input);
                const result = rpn.get()
                result === testCase.output ? console.log(`✅ Test case ${manifestIndex + 1}-${testCaseIndex + 1} passed!`) : console.log(`❗️ Test case ${manifestIndex + 1}-${testCaseIndex + 1} failed!`)
            })
            rpn.clear()
        })
    }
}

module.exports = test
