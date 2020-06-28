const url = require('url');
import getData from './getData';

const LATEST_URL: string = `https://api.exchangerate.host/`;

export const historical = (program: any) => {
  const BASE_URL = new URL(LATEST_URL);

  if (program.date) {
    BASE_URL.pathname = program.date;
  }

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

  return getData(BASE_URL.href)
}
