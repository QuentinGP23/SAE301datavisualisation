import { IndexApi, CryptoApi, TopTenCrypto } from './../api/api.js';
import CryptoLine from './../template/cryptoLine.js';
import CryptoFactories from './../factories/cryptoFactories.js';
import LineChart from './../charts/lineChart.js';
import CandlestickChart from './../charts/candlestickCharts.js';
import PieChart from './../charts/pieChart.js';

// function timestampToDate1d(arrayOfTimestamps) {
// 	arrayOfTimestamps.forEach((timestamp) => {
// 		const date = new Date(timestamp * 1000);

// 		const formattedTime = hours + ':' + minutes.substring(-2) + ':' + seconds.substring(-2);
// 		return formattedTime;
// 	});
// }

//function that mimics the $_GET function of php
//To use like that
//let GET = $_GET(),
//name = GET['name'],
//age = GET['age']; (this function was found on internet)

function GETFunction(param) {
	let vars = {};
	window.location.href.replace(location.hash, '').replace(
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function (m, key, value) {
			// callback
			vars[key] = value !== undefined ? value : '';
		},
	);

	if (param) {
		return vars[param] ? vars[param] : null;
	}
	return vars;
}
let GET = GETFunction();

async function cryptoPage() {
	const cryptoToAddToDom = GET['crypto'];
	const spanToAddCryptoName = document.querySelectorAll('.crypto-name');
	spanToAddCryptoName.forEach((element) => {
		element.textContent = cryptoToAddToDom;
	});

	function setData(response) {
		const { prices } = response;
		let timestamps = [];
		let cryptoPrices = [];
		prices.map((timestampAndPrice) => {
			timestamps.push(timestampAndPrice[0]);
			cryptoPrices.push(timestampAndPrice[1]);
		});
		return { timestamps, cryptoPrices };
	}
	let arrayOfButtons = document.querySelectorAll('.lineChart-button');
	const cryptoData = await new CryptoApi().getCryptoDataLineChart();
	const holc = await new CryptoApi().getCryptoDataCandleStickChart();
	const getData = setData(cryptoData);
	const ChartLine = new LineChart();
	const chartsCandlestick = new CandlestickChart(holc);
	const top10Crypto = await new TopTenCrypto().getCryptoData();
	const chartsPieChart = new PieChart(top10Crypto);

	chartsPieChart.chart();
	ChartLine.chart(getData.timestamps, getData.cryptoPrices);
	chartsCandlestick.chart();

	let newData;
	let newChart;

	arrayOfButtons.forEach((element) => {
		element.addEventListener('click', async (e) => {
			e.currentTarget.classList.add('active');
			switch (element.id) {
				case 'lineChart-1day':
					ChartLine.destroyChart();
					newData = new CryptoApi();
					newData.setDays = 1;
					newData = await newData.getCryptoDataLineChart();
					newChart = setData(newData);
					ChartLine.chart(newChart.timestamps, newChart.cryptoPrices);
					break;
				case 'lineChart-7days':
					ChartLine.destroyChart();
					newData = new CryptoApi();
					newData.setDays = 7;
					newData = await newData.getCryptoDataLineChart();
					newChart = setData(newData);
					ChartLine.chart(newChart.timestamps, newChart.cryptoPrices);
					break;
				case 'lineChart-180days':
					ChartLine.destroyChart();
					newData = new CryptoApi();
					newData.setDays = 180;
					newData = await newData.getCryptoDataLineChart();
					newChart = setData(newData);
					ChartLine.chart(newChart.timestamps, newChart.cryptoPrices);
					break;
				case 'lineChart-365days':
					ChartLine.destroyChart();
					newData = new CryptoApi();
					newData.setDays = 365;
					newData = await newData.getCryptoDataLineChart();
					newChart = setData(newData);
					ChartLine.chart(newChart.timestamps, newChart.cryptoPrices);
					break;
				default:
					break;
			}
		});
	});
}

async function indexPage() {
	const cryptoData = await new IndexApi().getCryptoData();
	const cryptos = cryptoData.map((data) => new CryptoFactories(data, 'cryptoLine'));

	cryptos.forEach((crypto) => {
		const cryptoLine = new CryptoLine(crypto);
		cryptoLine.createCryptoLine(crypto);
	});
}

// EXPORTS
export { GET, cryptoPage, indexPage };
