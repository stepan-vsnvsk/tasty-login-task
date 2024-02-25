import LoginPage from '../../pageobjects/pages/login-pages/login-page';
import testData from '../../fixtures/login-test-data.json';

describe('[Login] React - Log in page to be able to access the platform', () => {
    it('User cannot log in with an invalid email or password, #4', () => {
        cy.log('Step #1: Navigate to Login page.');
        cy.visit(Cypress.config('loginUrl'));
        const loginPage = new LoginPage();

        cy.log('Step #2: Enter non-valid email and unfocus the field.');
        loginPage.typeEmail(testData.invalidEmail, { blur: true });
        cy.log('[Expected result]: Default error message for invalid email is translated.');
        loginPage.checkInvalidEmailMessageIsDisplayed();

        cy.log('Step #3: Enter the valid email into the E-mail field.');
        loginPage.typeEmail(testData.validABTastyUser.email, { clear: true });
        cy.log('[Expected result]: Default error message for invalid email has disappeared.');
        loginPage.checkInvalidEmailMessageIsDisplayed(false);

        cy.log('Step #4: Enter the invalid password.');
        loginPage.typePassword(testData.invalidCredentials.invalidPassword);

        cy.log('Step #5: Click the "Sign in" button.');
        loginPage.clickSignInBtn();
        cy.log('[Expected result]: The message "Please enter a valid email or password" is displayed.');
        loginPage.checkInvalidCredentialsMessageIsDisplayed();
    });
});
