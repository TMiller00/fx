#!/usr/bin/env node
"use strict";
var program = require('commander').program;
var processCommands = require('./command/latest').processCommands;
program
    .option('-b, --base <symbol>', 'change the base currency')
    .option('-s, --symbols [symbols]', 'list preferred output currencies')
    .option('-a, --amount <amount>', 'the amount to be converted')
    .option('-p, --places <decimals>', 'round numbers to decimal place')
    .option('--source <source>', 'switch source data between forex or bank view')
    .action(function (option) {
    processCommands(option);
});
program
    .command('convert')
    .alias('c')
    .action(function () { return console.log('convert'); });
program.parse(process.argv);
