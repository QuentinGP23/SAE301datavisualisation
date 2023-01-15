import ChartSharingMethods from './ChartSharingMethods.js';
import { GET } from './../functions/functions.js';

class CandlestickChart extends ChartSharingMethods {
	constructor(holc) {
		super();
		this.holc = holc;
		// this.prices = datasets;
		// this.timeInOneCandle = 3_600_000; //milliseconds in one hour
	}

	getHolc() {
		let data = [];
		data = this.holc.map((element) => {
			return {
				x: element[0],
				o: element[1],
				h: element[2],
				l: element[3],
				c: element[4],
				s: [element[1], element[4]],
			};
		});
		return data;
	}

	chart() {
		//config
		const data = {
			datasets: [
				{
					label: 'Weekly Sales',
					data: this.getHolc(),
					backgroundColor: (ctx) => {
						const {
							raw: { o, c },
						} = ctx;
						let color;
						console.log();
						if (c >= o) {
							return (color = 'rgba(13, 148, 136, 1)');
						} else {
							return (color = 'rgba(255, 26, 104, 1)');
						}
					},
					label: `${GET['crypto']} court`,
					borderSkipped: false, // the border bottom of the bar
				},
			],
		};

		// candleStick plugin
		const candleStick = {
			id: 'candlestick',
			beforeDatasetsDraw(chart, args, pluginOptions) {
				const {
					ctx,
					data,
					chartArea: { top, bottom, left, right, height, width },
					scales: { x, y },
				} = chart;
				ctx.save();
				ctx.lineWith = 2;
				ctx.strokeStyle = 'rgb(13, 148, 136)';

				data.datasets[0].data.forEach((dataPoint, index) => {
					ctx.beginPath();
					ctx.moveTo(chart.getDatasetMeta(0).data[index].x, chart.getDatasetMeta(0).data[index].y);
					ctx.lineTo(
						chart.getDatasetMeta(0).data[index].x,
						y.getPixelForValue(data.datasets[0].data[index].h),
					);
					ctx.stroke();

					ctx.beginPath();
					ctx.moveTo(chart.getDatasetMeta(0).data[index].x, chart.getDatasetMeta(0).data[index].y);
					ctx.lineTo(
						chart.getDatasetMeta(0).data[index].x,
						y.getPixelForValue(data.datasets[0].data[index].l),
					);
					ctx.stroke();
				});
			},
		};

		const chartConfig = {
			type: 'bar',
			data,
			options: {
				parsing: {
					xAxisKey: 'x', //it represent the x above, same for the s
					yAxisKey: 's',
				},
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
			},
			plugins: [candleStick],
		};

		const ctx = document.getElementById('candlestickChart');
		const candlestickChart = new Chart(ctx, chartConfig);
	}
}

export default CandlestickChart;
