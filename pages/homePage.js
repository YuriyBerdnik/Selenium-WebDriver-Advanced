const BasePage = require('./basePage');

class HomePage extends BasePage {
    constructor() {
        super();
        this.url = '';
        this.newsTop = element(by.css('.news-top'));
        this.advancedSearch = element(by.css('.general-search'))
        this.newsModule = element(by.css('div.news-other'))
        this.kia = element(by.xpath('//a[@href="https://cars.av.by/kia"]'));
    };

    homePageNewsModuleShouldBeVisible() {
        return this.newsModule.isDisplayed().then(function (isDisplayed) {
            return expect(isDisplayed).to.be.true;
        })
    };

    openAdvancedSearch() {
        return this.advancedSearch.click();
    };

    openBrandKia() {
        return this.highlight(this.kia).then(() => { 
            return browser.actions().mouseMove(this.kia).click().perform();
        })
    };
}

module.exports = HomePage;