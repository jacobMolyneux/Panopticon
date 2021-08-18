const key = "8C2R26DMRMVREBOX";
let baseUrl = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=CNY&apikey=${key}`;
const getExchangeRate = () => {
  fetch(baseUrl, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data["Realtime Currency Exchange Rate"]);
    });
};

const getHistoricalData = (symbol, exchange) => {
  fetch(
    `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${symbol}&market=${exchange}&apikey=${key}`,
    {
      methond: "GET",
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log("Historical Data:");
      console.log(data);
    });
};
export { getExchangeRate, getHistoricalData };
