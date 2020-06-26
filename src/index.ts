#!/usr/bin/env node

const { program } = require('commander');
const { latest } = require('./command/latest');

program
  .option('-b, --base <symbol>', 'change the base currency')
  .option('-s, --symbols [symbols]', 'list preferred output currencies')
  .option('-a, --amount <amount>', 'the amount to be converted')
  .option('-p, --places <decimals>', 'round numbers to decimal place')
  .option('--source <source>', 'switch source data between forex or bank view')
  .action((option: any ) => {
    latest(option)
  })

program
  .command('convert')
  .alias('c')
  .action(() => console.log('convert'))
program.parse(process.argv);

