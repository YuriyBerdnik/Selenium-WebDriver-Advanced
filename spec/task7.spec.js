const PageObject = require('../pages/pageObject');

describe('Search car, implementation "actions"', () => {

    beforeAll(() => {
        return PageObject.getPage('Home').visit();
    });

    it('should check page title of Home Page', () => {
        return expect(PageObject.getPage().checkPageTitle('av.by — купить, продать авто в Беларуси. Автомобили новые и с пробегом на Автомалиновке.')).to.eventually.be.true;
    });

    it('should check that Home page is fully loaded', () => {
        return PageObject.getPage('Home').homePageNewsModuleShouldBeVisible();
    });

    it('open brand "Kia"', () => {
        return PageObject.getPage('Home').openBrandKia();
    });

    it('should check page title of Kia Page', () => {
        return expect(PageObject.getPage('Kia').checkPageTitle('Kia (Киа) купить в Беларуси - цены, отзывы, характеристики, фото. Объявления о продаже Kia (Киа) на Автомалиновке.')).to.eventually.be.true;
    });

    it('open model "Sorento" & check page title of Sorento Page', () => {
        return PageObject.getPage('Kia').openModelSorento();
    });

    it('should check that Sorento page is fully loaded', () => {
        return PageObject.getPage('Sorento').sorentoPageShouldBeVisible();
    });

    it('should check page title of Sorento Page', () => {
        return expect(PageObject.getPage('Sorento').checkPageTitle('Kia Sorento купить в Беларуси - цены, отзывы, характеристики, фото. Объявления о продаже Kia Sorento на Автомалиновке.')).to.eventually.be.true;
    });

    it('scrol to notification box Sorento page', () => {
        PageObject.getPage('Sorento').scrollToElement(PageObject.getPage('Sorento').notification);
    });

    it('should check that notification box is visible', () => {
        return PageObject.getPage('Sorento').notificationShouldBeVisible();
    });
});