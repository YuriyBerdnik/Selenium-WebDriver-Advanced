const Header = require('./common/headerComponent.js');
const Footer = require('./common/footerComponent.js');
const SearchBox = require('./common/searchBoxComponent.js');

class BasePage {

    constructor() {
        this.header = new Header();
        this.footer = new Footer();
        this.searchBox = new SearchBox();
    }

    visit() {
        return browser.get('https://av.by' + this.url);
    }

    checkPageTitle(pageTitle) {
        return this.getPageTitle().then((title) => {
            return title === pageTitle;
        });
    }

    getPageTitle() {
        return browser.getTitle();
    }

    
    clickToElement(element) {
        return element.click();
    }

    setElementValue(element, value) {
        return element.sendKeys(value);
    }

    waitForVisibilityOf(element, timeout) {
        const timeoutMs = timeout || browser.params.defaultTimeOut;
        return browser.wait(protractor.ExpectedConditions.visibilityOf(element), timeoutMs,
            `Waiting for visibilityOf of ${element.locator()} failed`);
    }

    setElementClear(element) {
        return element.clear();
    }

    getTextInputValue(element) {
        return element.getAttribute('value');
    }

    async clickElementByText(textToClick) {
		const arrayOfElementTexts = await this.collection.getText();
		const elementToClickIndex = arrayOfElementTexts.indexOf(textToClick);
		if (elementToClickIndex === -1) {
			throw new Error(`No element with [${textToClick}] text found!`);
		}
		return this.collection.get(elementToClickIndex).click();
    }
    
    async switchWindows(numberWindow) {
        browser.sleep(500);
		const windows = await browser.getAllWindowHandles();
		browser.switchTo().window(windows[numberWindow - 1]);
    }
    
    async highlight(element) {
		const oldBackgroundColor = await element.getCssValue('backgroundColor');
		await browser.executeScript("arguments[0].style.backgroundColor = 'red'", element);
		await browser.sleep(500);
		await browser.executeScript(`arguments[0].style.backgroundColor = '${oldBackgroundColor}'`, element);
		return browser.sleep(500);
    }
    
    async highlightClick(element) {
        await browser.executeScript("arguments[0].style.backgroundColor = 'red'", element);
        await browser.executeScript("arguments[0].click()", element);
    }

    async scrollToElement(element) {
		await browser.executeScript('arguments[0].scrollIntoView(true);', element);
	}
}

module.exports = BasePage;