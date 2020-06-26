const axios = require('axios');

const getData = async (url: string) => {
  try {
    const response = await axios.get(url);
    console.log(response)
    const data = response.data;
    console.table(data.rates);
  } catch (error) {
    console.log(error);
  }
};

export default getData
