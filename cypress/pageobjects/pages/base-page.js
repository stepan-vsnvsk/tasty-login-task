export default class BasePage {
    checkPageElementsAreTranslated(language) {
        const labels = Object.values(this.pageElementsTranslations).map((label) => label[language]);
        labels.forEach((label) => {
            cy.contains(label).should('be.visible');
        });
    }
}
