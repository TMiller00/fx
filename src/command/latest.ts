export const LATEST_URL: string = `https://api.exchangerate.host/latest`;

export const processCommands = (BASE_URL: any, program: any) => {
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

  return BASE_URL
}
