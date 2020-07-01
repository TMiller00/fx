import commonCommands, { Program } from '../utilities/commonCommands';

const LATEST_URL: string = `https://api.exchangerate.host/`;

type HistoricalProgram = Program<{ date: string }>

const historicalFunctions = (program: HistoricalProgram, queryUrl: URL): URL => {
  if (program.date) {
    queryUrl.pathname = program.date;
  }

  return queryUrl
}

export const historical = commonCommands(LATEST_URL, historicalFunctions)
