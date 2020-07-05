import commonCommands from '../utilities/commonCommands';

const historicalParameters: string[] = ['date'];
const LATEST_URL: string = `https://api.exchangerate.host/`;

export const historical = commonCommands(LATEST_URL, historicalParameters)
