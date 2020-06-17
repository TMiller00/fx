#!/usr/bin/env node

const argv = require('yargs').argv;
const axios = require('axios');
const url = require('url');

const LATEST_URL = `https://api.exchangerate.host/latest`;

const BASE_URL = new URL(LATEST_URL);

const getData = async (url) => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    console.table(data.rates);
  } catch (error) {
    console.log(error);
  }
};

if (argv.base) {
  BASE_URL.searchParams.append('base', argv.base);
}

if (argv.symbols) {
  BASE_URL.searchParams.append('symbols', argv.symbols);
}

if (argv.amount) {
  BASE_URL.searchParams.append('amount', argv.amount);
}

if (argv.places) {
  BASE_URL.searchParams.append('places', argv.places);
}

if (argv.source) {
  BASE_URL.searchParams.append('source', argv.source);
}

getData(BASE_URL.href)

