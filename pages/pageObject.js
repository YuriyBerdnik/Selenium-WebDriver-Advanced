const BasePage = require('./basePage');
const HomePage = require('./homePage');
const SearchPage = require('./searchPage');
const KiaPage = require('./kiaPage');
const SorentoPage = require('./sorentoPage');


class pageObject {
	static getPage(pageName) {
		switch (pageName) {
		case 'Home':
			return new HomePage();
		case 'Search':
			return new SearchPage();
		case 'Kia':
			return new KiaPage();
		case 'Sorento':
			return new SorentoPage();
		default:
			return new BasePage();
		}
	}
}

module.exports = pageObject;