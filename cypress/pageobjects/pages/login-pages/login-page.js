import {
    LoginPageLabelsTranslations,
    InvalidCredentialsMessageTranslations
} from '../../../constants/translations/login-pages/login-page-labels';
import BasePage from '../base-page';
import EmailFieldForm from '../../forms/email-field-form';

export default class LoginPage extends BasePage {
    emailField = '[data-testid="email"] input';
    passwordField = '[data-testid="password"] input';
    eyeIcon = '[data-testid="showIcon"]';
    eyeStrikethroughIcon = '[data-testid="hideIcon"]';
    forgotPasswordLink = '[href="/reset-password"]';
    signInBtn = '#signInButton';
    signInBtnIsLoadingAttribute = 'disabled';
    signInSSOBtn = '[data-testid="keyIcon"]';
    googleSignInBtn = '#GOOGLE_SIGN_IN_BUTTON';
    invalidEmailErrorMessage = '[data-testid="emailErrorMessage"]';
    invalidCredentialsErrorMessage = '#loginErrorMessage';

    pageElementsTranslations = LoginPageLabelsTranslations;
    emailFieldForm = new EmailFieldForm();

    constructor() {
        super();
        this.checkGoogleSignInBtnIsDisplayed();
    }

    checkAllPageElementsAreDisplayed() {
        this.checkEmailFieldIsDisplayed();
        this.checkPasswordFieldIsDisplayed();
        this.checkEyeIconIsDisplayed();
        this.checkForgotPasswordLinkIsDisplayed();
        this.checkSignInBtnIsDisplayed();
        this.checkSignInSSOBtnIsDisplayed();
    }

    typeEmail(email, options = { clear: false, blur: false }) {
        cy.get(this.emailField).typeWithOptions(email, options);
    }

    checkEmailFieldIsDisplayed() {
        cy.get(this.emailField).should('be.visible');
    }

    typePassword(password) {
        cy.get(this.passwordField).type(password, { log: false });
    }

    checkPasswordFieldIsDisplayed() {
        cy.get(this.passwordField).should('be.visible');
    }

    checkEyeIconIsDisplayed() {
        cy.get(this.eyeIcon).should('be.visible');
    }

    clickEyeIcon() {
        cy.get(this.eyeIcon).click();
    }

    clickEyeIconWithStrikethroughLine() {
        cy.get(this.eyeStrikethroughIcon).click();
    }

    checkEyeIconWithStrikethroughLineIsDisplayed() {
        cy.get(this.eyeStrikethroughIcon).should('be.visible');
    }

    checkPasswordIsDisplayed(shouldBeDisplayed = true) {
        const expectedType = shouldBeDisplayed ? 'text' : 'password';
        cy.get(this.passwordField).should('have.attr', 'type', expectedType);
    }

    clickSignInBtn() {
        cy.get(this.signInBtn).click();
        cy.get(this.signInBtn).should('not.have.attr', this.signInBtnIsLoadingAttribute);
    }

    checkSignInBtnIsEnabled() {
        cy.get(this.signInBtn).should('be.enabled');
    }

    checkSignInBtnIsDisplayed() {
        cy.get(this.signInBtn).should('be.visible');
    }

    clickForgotYourPasswordLink() {
        cy.get(this.forgotPasswordLink).click();
    }

    checkForgotPasswordLinkIsDisplayed() {
        cy.get(this.forgotPasswordLink).should('be.visible');
    }

    clickSignInWithSSOBtn() {
        cy.get(this.signInSSOBtn).click();
    }

    checkSignInSSOBtnIsDisplayed() {
        cy.get(this.signInSSOBtn).should('be.visible');
    }

    checkGoogleSignInBtnIsDisplayed() {
        cy.get(this.googleSignInBtn).should('be.visible');
    }

    checkInvalidEmailMessageIsDisplayed(isDisplayed = true) {
        const assertion = isDisplayed ? 'be.visible' : 'not.exist';
        cy.get(this.invalidEmailErrorMessage).should(assertion);
    }

    checkInvalidCredentialsMessageIsDisplayed(isDisplayed = true) {
        const assertion = isDisplayed ? 'be.visible' : 'not.exist';
        cy.get(this.invalidCredentialsErrorMessage).should(assertion);
    }

    checkInvalidCredentialsMessageIsTranslated(language) {
        cy.contains(InvalidCredentialsMessageTranslations[language]).should('be.visible');
    }
}
