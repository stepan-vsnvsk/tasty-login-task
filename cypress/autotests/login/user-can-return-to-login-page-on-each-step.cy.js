import LoginPage from '../../pageobjects/pages/login-pages/login-page';
import ForgotYourPasswordPage from '../../pageobjects/pages/login-pages/forgot-your-password-page';
import SignInWithSSOPage from '../../pageobjects/pages/login-pages/sign-in-sso-page';

describe('[Login] React - Log in page to be able to access the platform', () => {
    it('User can return to Login page on each login step, #10B', () => {
        cy.log('Step #1: Navigate to Login page.');
        cy.visit(Cypress.config('loginUrl'));
        var loginPage = new LoginPage();

        cy.log('Step #2: Click the "Forgot your password?" link.');
        loginPage.clickForgotYourPasswordLink();
        const forgotPasswordPage = new ForgotYourPasswordPage();

        cy.log('Step #3: Click the "Return to login" button.');
        forgotPasswordPage.clickBackToLoginBtn();
        cy.log('[Expected result]: Login page is opened.');
        var loginPage = new LoginPage();
        loginPage.checkAllPageElementsAreDisplayed();

        cy.log('Step #4: Click the "Sing-in with SSO" button.');
        loginPage.clickSignInWithSSOBtn();
        const signInWithSSOPage = new SignInWithSSOPage();

        cy.log('Step #5: Click the "Go back to Login page" button.');
        signInWithSSOPage.clickBackToLoginPageBtn();

        cy.log('[Expected result]: Login page is opened.');
        var loginPage = new LoginPage();
        loginPage.checkAllPageElementsAreDisplayed();

        /* TODO:
          Implement steps for MFA page.
        */
    });
});
