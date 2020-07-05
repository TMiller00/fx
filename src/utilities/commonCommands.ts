import getData from '../command/getData';

const commonAttributes: string[] = ['base', 'symbols', 'amount', 'places', 'source']

const commonCommands = (endpoint: string, parameters: string[]) => {
  const Parameters = [...parameters, ...commonAttributes ];

  return (program: any) => {
    let BASE_URL = new URL(endpoint);

    if (BASE_URL.pathname === '/') {
      BASE_URL.pathname = program['date'];
    }

    for (let p of Parameters) {
      if (program[p]) {
        BASE_URL.searchParams.append(p, program[p]);
      }
    }

    return getData(BASE_URL.href)
  }
}

export default commonCommands
