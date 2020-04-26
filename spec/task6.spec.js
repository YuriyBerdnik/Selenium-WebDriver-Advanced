const PageObject = require('../pages/pageObject');

describe('Sign up to the site & search car', () => {

    beforeAll(() => {
        return PageObject.getPage('Home').visit();
    });

    it('should check page title of Home Page', () => {
        return expect(PageObject.getPage().checkPageTitle('av.by — купить, продать авто в Беларуси. Автомобили новые и с пробегом на Автомалиновке.'));
    });

    it('should check that Home page is fully loaded', () => {
        return PageObject.getPage('Home').homePageNewsModuleShouldBeVisible();
    });

    it('should click Advanced search', () => {
        return PageObject.getPage('Home').openAdvancedSearch();
    });

    it('should check page title of Home Page', () => {
        return expect(PageObject.getPage('Search').checkPageTitle('Расширенный поиск по объявлениям'));
    });

    it('should check page main section', () => {
        return expect(PageObject.getPage().waitForVisibilityOf(PageObject.getPage('Search').mainSection, GLOBAL_TIMEOUT));
    });

    it('should fill form and should check logo and page title', () => {
        PageObject.getPage('Search').fillForm();
        PageObject.getPage().waitForVisibilityOf(PageObject.getPage().header.logo, GLOBAL_TIMEOUT);
        return expect(PageObject.getPage().checkPageTitle('Продажа и покупка авто в Беларуси. Автомалиновка — объявления о продаже транспорта.'));
    });
});