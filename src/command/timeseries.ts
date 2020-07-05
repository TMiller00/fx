import commonCommands from '../utilities/commonCommands';

const timeseriesParameters: string[] = ['start_date', 'end_date'];
const LATEST_URL = 'https://api.exchangerate.host/timeseries';

export const timeseries = commonCommands(LATEST_URL, timeseriesParameters)
