import commonCommands, { Program } from '../utilities/commonCommands';

const LATEST_URL = 'https://api.exchangerate.host/timeseries';

type TimeseriesAttributes = {
  start: string;
  end: string;
}

type TimeseriesProgram = Program<TimeseriesAttributes>;

const timeseriesFunctions = (program: TimeseriesProgram, queryUrl: URL): URL => {
  queryUrl.searchParams.append('start_date', program.start)
  queryUrl.searchParams.append('end_date', program.end)

  return queryUrl
}

export const timeseries = commonCommands(LATEST_URL, timeseriesFunctions)
