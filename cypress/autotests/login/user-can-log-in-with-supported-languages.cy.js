import LocalisationConstants from '../../constants/translations/localisation-constants';
import LoginPage from '../../pageobjects/pages/login-pages/login-page';
import SignInWithSSOPage from '../../pageobjects/pages/login-pages/sign-in-sso-page';
import ForgotYourPasswordPage from '../../pageobjects/pages/login-pages/forgot-your-password-page';
import testData from '../../fixtures/login-test-data.json';

describe('[Login] React - Log in page to be able to access the platform', () => {
    const unsupportedLanguage = Cypress._.sample(testData.unsupportedLanguages);
    const languagesForTranslationTesting = LocalisationConstants.supportedLanguages.concat(unsupportedLanguage);

    languagesForTranslationTesting.forEach((language) => {
        it(`User can log in with ${language} language`, () => {
            cy.log('Step #1: Navigate to Login page.');
            cy.visitWithLanguage(Cypress.config('loginUrl'), language);
            const lang = language === unsupportedLanguage ? LocalisationConstants.defaultLanguage : language;

            var loginPage = new LoginPage();
            cy.log('[Expected result]: All page elements are translated.');
            loginPage.checkPageElementsAreTranslated(lang);

            cy.log('Step #2: Enter non-valid email.');
            loginPage.typeEmail(testData.invalidEmail, { blur: true });
            cy.log('[Expected result]: Default error message for invalid email is translated.');
            loginPage.emailFieldForm.checkInvalidEmailMessageIsTranslated(lang);

            cy.log('Step #3: Enter valid email');
            loginPage.typeEmail(testData.validABTastyUser.email, { clear: true });
            cy.log('Step #4: Enter the invalid password');
            loginPage.typePassword(testData.invalidCredentials.invalidPassword);
            cy.log('[Expected result]: Default error message for invalid email has disappeared.');
            loginPage.checkInvalidEmailMessageIsDisplayed(false);

            cy.log('Step #5: Click the "Sign in" button.');
            loginPage.clickSignInBtn();
            cy.log('[Expected result]: Default error message for invalid credentials is translated.');
            loginPage.checkInvalidCredentialsMessageIsTranslated(lang);

            cy.log('Step #6: Click the "Forgot your password?" link.');
            loginPage.clickForgotYourPasswordLink();
            const forgotPasswordPage = new ForgotYourPasswordPage();
            cy.log('[Expected result]: All page elements are translated.');
            forgotPasswordPage.checkPageElementsAreTranslated(lang);
            cy.log('Step #7: Click the "Return to login" button.');
            forgotPasswordPage.clickBackToLoginBtn();
            var loginPage = new LoginPage();

            cy.log('Step #8: Click the "Sing-in with SSO" button.');
            loginPage.clickSignInWithSSOBtn();
            cy.log('[Expected result]: "Sign-in with SSO" page is translated.');
            const signInWithSSOPage = new SignInWithSSOPage();
            signInWithSSOPage.checkPageElementsAreTranslated(lang);

            cy.log('Step #9: Enter the invalid email.');
            signInWithSSOPage.typeEmail(testData.invalidEmail, { blur: true });
            signInWithSSOPage.emailFieldForm.checkInvalidEmailMessageIsTranslated(lang);

            /* TODO:
              Implement steps for 'MFA' page.
            */
        });
    });
});
