import getData from '../command/getData';

enum CommonAttributes {
  base = 'base',
  symbols = 'symbols',
  amount = 'amount',
  places = 'places',
  source = 'source',
}

export type Program<T> = Record<CommonAttributes, string> & T

const commonCommands = <T>(endpoint: string, f: (program: Program<T>, queryUrl: URL) => URL) => {
  let BASE_URL = new URL(endpoint);
  const params: Array<keyof typeof CommonAttributes> = ['base', 'symbols', 'amount', 'places', 'source'];

  return (program: Program<T>) => {
    BASE_URL = f(program, BASE_URL)

    for (let p of params) {
      if (program[p]) {
        BASE_URL.searchParams.append(p, program[p]);
      }
    }

    return getData(BASE_URL.href)
  }
}

export default commonCommands
