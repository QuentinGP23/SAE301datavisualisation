import Crypto from './../models/crypto.js';

class CryptoFactories {
	constructor(data, type) {
		if (type === 'cryptoLine') {
			return new Crypto(data);
		} else {
			throw 'Unknown type format';
		}
	}
}

export default CryptoFactories;
