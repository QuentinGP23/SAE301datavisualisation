class CryptoLine {
	constructor(crypto) {
		this.crypto = crypto;
	}

	isPositive(number) {
		if (Math.sign(number) === 1) {
			return 'text-green-400';
		} else if (Math.sign(number) === -1) {
			return 'text-red-400';
		}
	}
	createCryptoLine() {
		const cryptoLineWrapper = document.querySelector('.crypto-line-wrapper');

		const cryptoLine = `<tr>
        <th
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
            ${this.crypto.cryptoMarket_cap_rank}
        </th>
        <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 h-3 flex flex-col">
            <a href="./crypto.html?pageType=crypto&crypto=${this.crypto.id}">
<img src="${this.crypto.cryptoImage}" alt="logo ${
			this.crypto.cryptoName
		}" class="img-inline inline" loading="lazy"/> 
            <span>${this.crypto.cryptoName}</span>
            <span>${this.crypto.cryptoSymbol}</span>
            </a>
            
        </td>
        <td
            class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            ${this.crypto.cryptoPrice}
        </td>
        <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            1h
        </td>
        <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ${this.isPositive(
							this.crypto.cryptoPriceChangePercentage24h,
						)}">
            ${
							this.crypto.cryptoPriceChangePercentage24h
								? this.crypto.cryptoPriceChangePercentage24h.toFixed(2)
								: 'data not found'
						}%
        </td>
        <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            7d
        </td>
        <td
            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            ${this.crypto.cryptoMarket_cap}
        </td>
    </tr>
`;

		cryptoLineWrapper.innerHTML += cryptoLine;
		return cryptoLineWrapper;
	}
}

{
	/* <i class="fas fa-arrow-up text-emerald-500 mr-4"></i> */
}
export default CryptoLine;
