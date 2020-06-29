const axios = require('axios');
const Table = require('cli-table3');

const table = new Table({
  head: ['Symbol', 'Value']
})

const getData = async (url: string) => {
  try {
    const response = await axios.get(url);
    const data = response?.data;
    Object.entries(data?.rates).forEach(c => table.push(c))
    console.log(table.toString())
  } catch (error) {
    console.log(error);
  }
};

export default getData
