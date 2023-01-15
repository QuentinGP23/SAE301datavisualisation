import ChartSharingMethods from './ChartSharingMethods.js';
import { CryptoApi } from './../api/api.js';
import { GET } from './../functions/functions.js';

class LineChart {
	constructor(timestamp, datasets) {
		this.clickListenner = [
			'lineChart-1day',
			'lineChart-7days',
			'lineChart-180days',
			'lineChart-365days',
		];
		this.ctx = document.getElementById('lineChart').getContext('2d');
		this.lineChartCanva = null;
	}

	chart(timestamp, prices) {
		let data = {
			labels: timestamp, //nom des colones
			datasets: [
				{
					label: `${GET['crypto']} court`,
					data: prices,
					backgroundColor: 'rgb(13, 148, 136)',
					borderColor: 'rgb(13, 148, 136)',
					pointStyle: false,
					tension: 0.1,
				},
			], // chaque obj dans datasets est une ligne
		};

		let options = {
			scales: {
				x: {
					type: 'timeseries',
					time: {
						unit: 'day',
					},
				},
				y: {
					beginAtZero: false,
					grace: 1, //distance between the top and the more high or low value
				},
			},
		};

		const chartConfig = {
			type: 'line',
			data,
			options,
		};
		this.lineChartCanva = new Chart(this.ctx, chartConfig);
	}

	destroyChart() {
		this.lineChartCanva.destroy();
	}
}

// let newThis = this;
// const buttonWrapper = this.buttonWrapper;
// function changeChartData(element) {
// 	const clickListenner2 = [
// 		'lineChart-1day',
// 		'lineChart-7days',
// 		'lineChart-180days',
// 		'lineChart-365days',
// 	];
// 	async function call(numberOfDays, parentClass) {
// 		const cryptoData = await new CryptoApi().getCryptoDataLineChart();
// 		const { prices } = cryptoData;
// 		let timestamps = [];
// 		let cryptoPrices = [];
// 		prices.map((timestampAndPrice) => {
// 			timestamps.push(timestampAndPrice[0]);
// 			cryptoPrices.push(timestampAndPrice[1]);
// 		});
// 		newThis.chart(timestamps, cryptoPrices);
// 	}

// 	switch (element) {
// 		case clickListenner2[0]:
// 			console.log('1');
// 			call(1);
// 			break;
// 		case clickListenner2[1]:
// 			console.log('2');
// 			call(7);
// 			break;
// 		case clickListenner2[2]:
// 			call(180);
// 			break;
// 		case clickListenner2[3]:
// 			call(365);
// 			break;
// 		default:
// 			break;
// 	}
// }

// let data = {
// 	labels: timestamp, //nom des colones
// 	datasets: [
// 		{
// 			data: prices,
// 			backgroundColor: 'red',
// 			borderColor: 'blue',
// 		},
// 	], // chaque obj dans datasets est une ligne
// };

// let options = {
// 	scales: {
// 		x: {
// 			type: 'timeseries',
// 			time: {
// 				unit: 'day',
// 			},
// 		},
// 		y: {
// 			beginAtZero: false,
// 			grace: 1, //distance between the top and the more high or low value
// 		},
// 	},
// };

// const chartConfig = {
// 	type: 'line',
// 	data,
// 	options,
// };
// let isLineChartCreated;
// let lineChartCanva;
// console.log('linechart', isLineChartCreated);
// const test = () => {
// 	if (isLineChartCreated) {
// 		const clickListenner = [...this.clickListenner];
// 		clickListenner.forEach((element) => {
// 			const changeDays = document.getElementById(element);
// 			changeDays.addEventListener(
// 				'click',
// 				() => {
// 					console.log('construct');
// 					changeChartData(element);
// 				},
// 				{ once: true, passive: true },
// 			);
// 		});

// 		buttonWrapper.addEventListener(
// 			'click',
// 			() => {
// 				lineChartCanva.destroy();
// 				console.log('destroyed');
// 			},
// 			{ once: true, passive: true, capture: true },
// 		);
// 	} else {
// 		console.log('else');
// 		lineChartCanva = new Chart(this.ctx, chartConfig);
// 		isLineChartCreated = true;
// 		const clickListenner = [...this.clickListenner];
// 		clickListenner.forEach((element) => {
// 			const changeDays = document.getElementById(element);
// 			changeDays.addEventListener(
// 				'click',
// 				() => {
// 					console.log('construct');
// 					changeChartData(element);
// 				},
// 				{ once: true, passive: true },
// 			);
// 		});

// 		buttonWrapper.addEventListener(
// 			'click',
// 			() => {
// 				lineChartCanva.destroy();
// 				console.log('destroyed');
// 			},
// 			{ once: true, passive: true, capture: true },
// 		);
// 	}
// };
// test();

export default LineChart;
