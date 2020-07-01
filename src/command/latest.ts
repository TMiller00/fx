import commonCommands, { Program } from '../utilities/commonCommands';

const LATEST_URL: string = `https://api.exchangerate.host/latest`;

type latestProgram = Program<{}>;

const latestFunctions = (program: latestProgram, queryUrl: URL): URL => queryUrl;

export const latest = commonCommands(LATEST_URL, latestFunctions)

