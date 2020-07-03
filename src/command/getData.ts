const url = require('url')
const axios = require('axios');
const Table = require('cli-table3');
const asciichart = require('asciichart');

const table = new Table({});

const getData = async (url: string) => {
  try {
    const response = await axios.get(url);
    const data = response?.data;

    if (data.result && typeof data.result === 'number') {
      table.options.head = [data.query.from, data.query.to]


      table.push([data.query.amount, data.result]);
      console.log(table.toString());
    }

    if (!data.timeseries && data.rates && typeof data.rates === 'object') {
      table.options.head = ['Symbol', 'Value'];

      Object.entries(data?.rates).forEach(c => table.push(c));
      console.log(table.toString());
    }

    if (data.timeseries) {

      let params = new URL(url);
      let chart: any = [];

      const start_date = params.searchParams.get('start_date')
      const end_date = params.searchParams.get('end_date')
      const symbol: string = params.searchParams.get('symbols') || 'USD';

      table.options.head = [{ hAlign: 'center', content: `${symbol} from ${start_date} to ${end_date}` }];
      Object.entries(data.rates).forEach((c: any) => chart.push(c[1][symbol]));

      table.push([asciichart.plot(chart, { height: 10, padding: '' })])
      console.log(table.toString());
    }
  } catch (error) {
    console.log(error);
  }
};

export default getData
