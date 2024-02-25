import BasePage from '../base-page';
import SignInWithSSOPageLabelsTranslations from '../../../constants/translations/login-pages/sign-in-with-sso-labels';
import EmailFieldForm from '../../forms/email-field-form';

export default class SignInWithSSOPage extends BasePage {
    emailField = '[data-testid="inputWrapper"] input';
    signInBtn = 'button[type="submit"]';
    backToLoginPageLink = '[data-testid="chevronAloneLeftIcon"]';
    invalidEmailErrorMessage = '[data-testid="emailErrorMessage"]';

    pageElementsTranslations = SignInWithSSOPageLabelsTranslations;
    emailFieldForm = new EmailFieldForm();

    checkAllElementsAreDisplayed() {
        this.checkEmailFieldIsDisplayed();
        this.checkSignInBtnIsDisplayed();
        this.checkBackToLoginPageLinkIsDisplayed();
    }

    typeEmail(email, options = { blur: false }) {
        cy.get(this.emailField).typeWithOptions(email, options);
    }

    checkEmailFieldIsDisplayed() {
        cy.get(this.emailField).should('be.visible');
    }

    checkInvalidEmailErrorMessageIsDisplayed() {
        cy.get(this.invalidEmailErrorMessage).should('be.visible');
    }

    clickSignInBtn() {
        cy.get(this.signInBtn).click();
    }

    checkSignInBtnIsDisplayed() {
        cy.get(this.signInBtn).should('be.visible');
    }

    checkBackToLoginPageLinkIsDisplayed() {
        cy.get(this.backToLoginPageLink).should('be.visible');
    }

    clickBackToLoginPageBtn() {
        cy.get(this.backToLoginPageLink).click();
    }
}
