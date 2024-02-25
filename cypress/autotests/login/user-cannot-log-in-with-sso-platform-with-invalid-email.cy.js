import LoginPage from '../../pageobjects/pages/login-pages/login-page';
import SignInWithSSOPage from '../../pageobjects/pages/login-pages/sign-in-sso-page';
import testData from '../../fixtures/login-test-data.json';

describe('[Login] React - Log in page to be able to access the platform', () => {
    it('User cannot log in with an SSO platform with an invalid email, #7', () => {
        cy.log('Step #1: Navigate to Login page.');
        cy.visit(Cypress.config('loginUrl'));
        const loginPage = new LoginPage();

        cy.log('Step #2: Click the "Sign in with SSO" button.');
        loginPage.clickSignInWithSSOBtn();
        cy.log('[Expected result]: "Sign in with SSO" page is opened.');
        const signInWithSSOPage = new SignInWithSSOPage();
        signInWithSSOPage.checkAllElementsAreDisplayed();

        cy.log('Step #3: Enter the non-valid email.');
        signInWithSSOPage.typeEmail(testData.invalidCredentials.email);

        cy.log('Step #4: Click the "Sign in" button.');
        signInWithSSOPage.clickSignInBtn();
        cy.log('[Expected result]: The default error message is displayed.');
        signInWithSSOPage.checkInvalidEmailErrorMessageIsDisplayed();
    });
});
