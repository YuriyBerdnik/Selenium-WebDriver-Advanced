const PageObject = require('../pages/pageObject');

describe('Search car, implementation "actions"', () => {

    beforeAll(async () => {
        return PageObject.getPage('Home').visit();
    });

    it('should check page title of Home Page', async () => {
        return expect(PageObject.getPage().checkPageTitle('av.by — купить, продать авто в Беларуси. Автомобили новые и с пробегом на Автомалиновке.'));
    });

    it('should check that Home page is fully loaded', async () => {
        return PageObject.getPage('Home').homePageNewsModuleShouldBeVisible();
    });

    it('open brand "Kia"', async () => {
        return PageObject.getPage('Home').openBrandKia();
    });

    it('should check page title of Kia Page', async () => {
        return expect(PageObject.getPage('Kia').checkPageTitle('Kia (Киа) купить в Беларуси - цены, отзывы, характеристики, фото. Объявления о продаже Kia (Киа) на Автомалиновке.'));
    });

    it('open model "Sorento" & check page title of Sorento Page', async () => {
        return PageObject.getPage('Kia').openModelSorento();
    });

    it('should check that Sorento page is fully loaded', async () => {
        return PageObject.getPage('Sorento').sorentoPageShouldBeVisible();
    });

    it('should check page title of Sorento Page', async () => {
        return expect(PageObject.getPage('Sorento').checkPageTitle('Kia Sorento купить в Беларуси - цены, отзывы, характеристики, фото. Объявления о продаже Kia Sorento на Автомалиновке.'));
    });

    it('scrol to notification box Sorento page', async () => {
        PageObject.getPage('Sorento').scrollToElement(PageObject.getPage('Sorento').notification);
    });

    it('should check that notification box is visible', async () => {
        return PageObject.getPage('Sorento').notificationShouldBeVisible();
    });
});