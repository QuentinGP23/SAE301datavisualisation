import { cryptoPage, indexPage } from '../functions/functions.js';

class PageFactories {
	constructor(pageType) {
		if (pageType === 'index') {
			indexPage();
		} else if (pageType === 'crypto') {
			cryptoPage();
		} else if (pageType === 'nft') {
			console.log('nft');
		} else {
			throw 'Unknown type format';
		}
	}
}

export default PageFactories;
