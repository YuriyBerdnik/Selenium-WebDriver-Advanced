const BasePage = require('./basePage');

class KiaPage extends BasePage {
    constructor() {
        super();
        this.url = 'https://cars.av.by/kia';
        this.sorento = element(by.xpath("//a[@href='https://cars.av.by/kia/sorento']"));
    }

    openModelSorento() {
            return this.highlightClick(this.sorento);
	}
}

module.exports = KiaPage;
