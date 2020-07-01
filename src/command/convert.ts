import commonCommands, { Program } from '../utilities/commonCommands';

const LATEST_URL: string = `https://api.exchangerate.host/convert`;

enum ConvertAttributes {
  from = 'from',
  to = 'to',
  date = 'date'
}

type ConvertParams = Record<ConvertAttributes, string>;

type ConvertProgram = Program<ConvertParams>;

const convertFunctions = (program: ConvertProgram, queryUrl: URL): URL => {
  const params: Array<keyof typeof ConvertAttributes> = ['from', 'to', 'date'];

  for (let p of params) {
    if (program[p]) {
      queryUrl.searchParams.append(p, program[p])
    }
  }

  return queryUrl
}

export const convert = commonCommands(LATEST_URL, convertFunctions)

