import { GET } from './functions/functions.js';
import PageFactories from './factories/pageFactories.js';

class App {
	async main() {
		const pageType = GET['pageType'] || 'index';
		new PageFactories(pageType);
	}
}

const app = new App();
app.main();
