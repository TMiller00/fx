const url = require('url');
const axios = require('axios');

const getData = async (url: string) => {
  try {
    const response = await axios.get(url);
    const data = response?.data?.result;
    console.table(data);
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
