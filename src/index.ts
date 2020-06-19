#!/usr/bin/env node

const { program } = require('commander');
const axios = require('axios');
const url = require('url');

const LATEST_URL: string = `https://api.exchangerate.host/latest`;

const BASE_URL = new URL(LATEST_URL);

const getData = async (url: string) => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    console.table(data.rates);
  } catch (error) {
    console.log(error);
  }
};

program
  .option('-b, --base <type>', 'change the base currency')
  .option('-s, --symbols <type>', 'list preferred output currencies')
  .option('-a, --amount <type>', 'the amount to be converted')
  .option('-p, --places <type>', 'round numbers to decimal place')
  .option('--source <type>', 'switch source data between forex or bank view');

program.parse(process.argv);

if (program.base) {
  BASE_URL.searchParams.append('base', program.base);
}

if (program.symbols) {
  BASE_URL.searchParams.append('symbols', program.symbols);
}

if (program.amount) {
  BASE_URL.searchParams.append('amount', program.amount);
}

if (program.places) {
  BASE_URL.searchParams.append('places', program.places);
}

if (program.source) {
  BASE_URL.searchParams.append('source', program.source);
}

getData(BASE_URL.href)

