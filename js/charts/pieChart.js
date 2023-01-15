class PieChart {
	constructor(arrayTopTenCrypto) {
		this.arrayTopTenCrypto = arrayTopTenCrypto;
	}
	chart() {
		let cryptoNames = [];
		let marketCap = [];
		this.arrayTopTenCrypto.forEach((crypto) => {
			cryptoNames.push(crypto.name);
			marketCap.push(crypto.market_cap);
		});
		const ctx = document.getElementById('pieChart');

		new Chart(ctx, {
			type: 'pie',
			data: {
				labels: cryptoNames,
				datasets: [
					{
						label: 'capitalisation boursiere en usd ',
						data: marketCap,
						borderWidth: 1,
					},
				],
			},
			options: {
				scales: {
					y: {
						beginAtZero: true,
					},
				},
			},
		});
	}
}
export default PieChart;
