import InvalidEmailMessageTranslations from '../../constants/translations/login-pages/email-form-messages';

export default class EmailFieldForm {
    checkInvalidEmailMessageIsTranslated(language) {
        cy.contains(InvalidEmailMessageTranslations[language]).should('be.visible');
    }
}
