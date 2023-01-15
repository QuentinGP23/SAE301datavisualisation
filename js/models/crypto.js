class Crypto {
	constructor(data) {
		this.market_cap_rank = data.market_cap_rank;
		this.image = data.image;
		this.name = data.name;
		this.symbol = data.symbol;
		this.price = data.current_price;
		// this.percent_change_1h = data.;
		// this.percent_change_24h = '';
		// this.percent_change_7d = '';
		this.price_change_percentage_24h = data.price_change_percentage_24h;
		this.market_cap = data.market_cap;
		this.sparkline_in_7d = data.sparkline_in_7d.price;
		this.id = data.id;
	}

	get cryptoName() {
		return this.name;
	}
	get cryptoSymbol() {
		return this.symbol;
	}
	get cryptoPrice() {
		return this.price;
	}
	get cryptoMarket_cap() {
		return this.market_cap;
	}
	get cryptoMarket_cap_rank() {
		return this.market_cap_rank;
	}
	get cryptoImage() {
		return this.image;
	}
	get cryptoPercentChange1h() {
		return this.sparkline_in_7d;
	}
	get cryptoPriceChangePercentage24h() {
		return this.price_change_percentage_24h;
	}
	get cryptoPercentChange7d() {
		return this.sparkline_in_7d;
	}
	get cryptoId() {
		return this.id;
	}
}

export default Crypto;
