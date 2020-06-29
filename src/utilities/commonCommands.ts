const url = require('url');
import getData from '../command/getData';

enum CommonAttributes {
  base = 'base',
  symbols = 'symbols',
  amount = 'amount',
  places = 'places',
  source = 'source'
}

type Program = {
  [keyof in CommonAttributes]?: string;
}

const commonCommands = (url: string) => {
  return (program: any) => {
    let BASE_URL = new URL(url);

    const params: Array<keyof typeof CommonAttributes> = ['base', 'symbols', 'amount', 'places', 'source'];

    if (program.date) {
      BASE_URL.pathname = program.date;
    }

    for (let p of params) {
      if (program[p]) {
        BASE_URL.searchParams.append(p, program[p]);
      }
    }

    getData(BASE_URL.href)
  }
}

export default commonCommands
