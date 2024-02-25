Cypress.Commands.add('visitWithLanguage', (url, language) => {
    cy.visit(url, {
        onBeforeLoad(win) {
            Object.defineProperty(win.navigator, 'language', { value: language });
        },
        headers: { 'Accept-Language': language }
    });
});
