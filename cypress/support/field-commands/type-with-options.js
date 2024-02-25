Cypress.Commands.add(
    'typeWithOptions',
    { prevSubject: true },
    (subjectField, stringToType, options = { clear: false, blur: false }) => {
        if (options.clear) {
            cy.wrap(subjectField).clear();
        }
        cy.get(subjectField).type(stringToType);
        if (options.blur) {
            cy.get(subjectField).blur();
        }
    }
);
