import { GET } from './../functions/functions.js';

class Api {
	// constructor(url) {
	// 	this._url = url;
	// }

	async get(url) {
		return fetch(url)
			.then((response) => response.json())
			.then((data) => data)
			.catch((error) => console.log('new error : ', error));
	}
}

class IndexApi extends Api {
	constructor() {
		super();
		this.url =
			'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true';
	}
	async getCryptoData() {
		return await this.get(this.url);
	}
}
class TopTenCrypto extends Api {
	constructor() {
		super();
		this.url =
			'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';
	}
	async getCryptoData() {
		return await this.get(this.url);
	}
}

class CryptoApi extends Api {
	constructor() {
		super();
		this.coin = GET['crypto'];
		this.currency = 'usd';
		this.days = 7;
		this.lineChartUrl = `https://api.coingecko.com/api/v3/coins/${this.coin}/market_chart?vs_currency=${this.currency}&days=${this.days}`;
		this.holcUrl = 'https://api.coingecko.com/api/v3/coins/bitcoin/ohlc?vs_currency=usd&days=30';
	}
	async getCryptoDataLineChart() {
		this.lineChartUrl = `https://api.coingecko.com/api/v3/coins/${this.coin}/market_chart?vs_currency=${this.currency}&days=${this.days}`;
		return await this.get(this.lineChartUrl);
	}

	async getCryptoDataCandleStickChart() {
		return await this.get(this.holcUrl);
	}

	/**
	 * @param {string} coinName
	 */
	set setCoin(coinName) {
		this.coin = coinName;
	}
	/**
	 * @param {string} currency
	 */
	set setCurrency(currency) {
		this.currency = currency;
	}
	/**
	 * @param {string} days
	 */
	set setDays(days) {
		this.days = days;
		this.lineChartUrl;
		return this;
	}
}

export { IndexApi, CryptoApi, TopTenCrypto };
