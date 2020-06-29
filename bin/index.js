#!/usr/bin/env node
"use strict";
var program = require('commander').program;
var latest = require('./command/latest').latest;
var convert = require('./command/convert').convert;
var historical = require('./command/historical').historical;
program
    .command('latest')
    .option('-b, --base <symbol>', 'change the base currency', 'USD')
    .option('-s, --symbols [symbols]', 'list preferred output currencies')
    .option('-a, --amount <amount>', 'the amount to be converted')
    .option('-p, --places <decimals>', 'round numbers to decimal place', 2)
    .option('--source <source>', 'switch source data between forex or bank view')
    .action(function (option) {
    latest(option);
});
program
    .command('convert')
    .requiredOption('-f, --from <symbol>', 'base currency')
    .requiredOption('-t, --to <symbol>', 'conversion currency')
    .option('-d, --date <date>', 'the date to convert currency')
    .option('-a, --amount <amount>', 'the amount to be converted')
    .option('-p, --places <decimals>', 'round numbers to decimal place', 2)
    .option('--source <source>', 'switch source data between forex or bank view')
    .action(function (option) {
    convert(option);
});
program
    .command('historical')
    .requiredOption('-d, --date <date>', 'the date to convert currency')
    .option('-s, --symbols [symbols]', 'list preferred output currencies')
    .option('-b, --base <symbol>', 'change the base currency', 'USD')
    .option('-a, --amount <amount>', 'the amount to be converted')
    .option('-p, --places <decimals>', 'round numbers to decimal place', 2)
    .option('--source <source>', 'switch source data between forex or bank view')
    .action(function (option) {
    historical(option);
});
program.parse(process.argv);
