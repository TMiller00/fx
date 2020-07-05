import commonCommands from '../utilities/commonCommands';

const LATEST_URL: string = `https://api.exchangerate.host/latest`;
const latestParameters: string[] = [];

export const latest = commonCommands(LATEST_URL, latestParameters)

