import commonCommands from '../utilities/commonCommands';

const convertParameters: string[] = ['from', 'to', 'date'];
const LATEST_URL: string = `https://api.exchangerate.host/convert`;

export const convert = commonCommands(LATEST_URL, convertParameters)

