const url = require('url');
const axios = require('axios');
const Table = require('cli-table3');

const table = new Table()

const getData = async (url: string) => {
  try {
    const response = await axios.get(url);
    const data = response?.data;
    table.push(
      [data.query.from, data.query.to],
      [data.query.amount, data.result]
    )
    console.log(table.toString());
  } catch (error) {
    console.log(error);
  }
};

const CONVERT_URL: string = `https://api.exchangerate.host/convert`;

export const convert = (program: any) => {
  const BASE_URL = new URL(CONVERT_URL);

  if (program.from) {
    BASE_URL.searchParams.append('from', program.from);
  }

  if (program.to) {
    BASE_URL.searchParams.append('to', program.to);
  }

  if (program.date) {
    BASE_URL.searchParams.append('date', program.date);
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

  return getData(BASE_URL.href)
}
