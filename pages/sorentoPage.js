const BasePage = require('./basePage');

class SorentoPage extends BasePage {
    constructor() {
        super();
        this.url = 'https://cars.av.by/kia/sorento';
        this.mainBox = element(by.css('.main-box'));
        this.notification = element(by.css('.subscription-manage'));
    }

    sorentoPageShouldBeVisible() {
        this.waitForVisibilityOf(this.mainBox, 10000);
        return this.mainBox.isDisplayed().then(function (isDisplayed) {
            return expect(isDisplayed).to.be.true;
        })
    };

    notificationShouldBeVisible() {
        this.waitForVisibilityOf(this.notification, 10000);
        return this.notification.isDisplayed().then(function (isDisplayed) {
            return expect(isDisplayed).to.be.true;
        })
    };
}

module.exports = SorentoPage;
