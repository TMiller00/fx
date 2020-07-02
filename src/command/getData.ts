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
      table.push(
        [data.query.amount, data.result]
      )
      console.log(table.toString());
    }

    if (!data.timeseries && data.rates && typeof data.rates === 'object') {
      table.options.head = ['Symbol', 'Value'];
      Object.entries(data?.rates).forEach(c => table.push(c));
      console.log(table.toString());
    }

    if (data.timeseries) {
      let chart: any = [];
      Object.entries(data.rates).forEach((c: any) => chart.push(c[1]['USD']));
      //console.log(chart)
      console.log(asciichart.plot(chart, { height: 10 }))
    }
  } catch (error) {
    console.log(error);
  }
};

export default getData
