const test = require("../lib/test.js");

test.run([[
    {
        input: 5,
        output: 5
    },
    {
        input: 8,
        output: 8
    },
    {
        input: "+",
        output: 13
    }
],
[
    {
        input: "5 5 5 8 + + -",
        output: -13.0
    },
    {
        input: "13 +",
        output: 0.0
    },
],
[
    {
        input: "-3",
        output: -3.0
    },
    {
        input: "-2",
        output: -2.0
    },
    {
        input: "*",
        output: 6.0
    },
    {
        input: "5",
        output: 5.0
    },
    {
        input: "+",
        output: 11.0
    },

],
[
    {
        input: "5",
        output: 5
    },
    {
        input: "9",
        output: 9
    },
    {
        input: "1",
        output: 1
    },
    {
        input: "-",
        output: 8
    },
    {
        input: "/",
        output: 0.625
    },

]])