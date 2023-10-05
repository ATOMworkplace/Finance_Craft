const axios = require('axios');
const express = require('express');

const apiKey = 'XWT4BU7NOC73D1HZ';
const app = express();
const port = 3000;
// Define the Alpha Vantage API URL
const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TSLA&apikey=${apiKey}`;


// Function to fetch and display stock data
/*function fetchStockData() {
  axios.get(apiUrl)
    .then(response => {
      const stockData = response.data;
      const metaData = stockData['Meta Data'];
      const timeSeries = stockData['Time Series (Daily)'];

      // Extract relevant data from the response
      const symbol = metaData['2. Symbol'];
      const lastRefreshed = metaData['3. Last Refreshed'];
      const latestData = timeSeries[lastRefreshed];
      const openPrice = latestData['1. open'];
      const highPrice = latestData['2. high'];
      const lowPrice = latestData['3. low'];
      const closePrice = latestData['4. close'];
      const volume = latestData['5. volume'];

      // Display data on the website
      const stockOutput = `
        <h1>${symbol} Stock Data</h1>
        <p>Last Refreshed: ${lastRefreshed}</p>
        <p>Open Price: $${openPrice}</p>
        <p>High Price: $${highPrice}</p>
        <p>Low Price: $${lowPrice}</p>
        <p>Close Price: $${closePrice}</p>
        <p>Volume: ${volume} shares</p>
      `;

      document.getElementById('stock-data').innerHTML = stockOutput;
    })
    .catch(error => {
      console.error('Error fetching stock data:', error);
    });
}

// Call the function to fetch and display stock data
fetchStockData();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});*/