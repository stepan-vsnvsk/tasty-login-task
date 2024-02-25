import LoginPage from '../../pageobjects/pages/login-pages/login-page';
import Helpers from '../../utils/helpers';
import testData from '../../fixtures/login-test-data.json';

describe('[Login] React - Log in page to be able to access the platform', () => {
    it('@ABTasty user can log in with the valid email, password and MFA code, #1', () => {
        cy.log('Step #1: Navigate to Login page.');
        cy.visit(Cypress.config('loginUrl'));
        const loginPage = new LoginPage();
        cy.log('[Expected result]: All page elements are displayed.');
        loginPage.checkAllPageElementsAreDisplayed();

        cy.log('Step #2: Enter the valid email into the E-mail field.');
        loginPage.typeEmail(testData.validABTastyUser.email);

        cy.log('Step #3: Enter the valid password.');
        loginPage.typePassword(Helpers.getPassword(testData.validABTastyUser.email));

        cy.log('[Expected result]: Password characters are obscured and displayed as dots.');
        loginPage.checkPasswordIsDisplayed(false);

        cy.log('[Expected result]: The sign-in button is enabled.');
        loginPage.checkSignInBtnIsEnabled();

        cy.log('Step #4: Click on the eye icon in the password field.');
        loginPage.clickEyeIcon();

        cy.log('[Expected result]: Password characters are displayed.');
        loginPage.checkPasswordIsDisplayed();
        cy.log('[Expected result]: The eye icon has a strikethrough line.');
        loginPage.checkEyeIconWithStrikethroughLineIsDisplayed();

        cy.log('Step #5: Click on the eye icon with a strikethrough line.');
        loginPage.clickEyeIconWithStrikethroughLine();
        cy.log('[Expected result]: Password characters are obscured and displayed as dots.');
        loginPage.checkPasswordIsDisplayed(false);

        cy.log('Step #6: Click the "Sign in" button.');
        loginPage.clickSignInBtn();
        cy.log('[Expected result]: The MFA page is opened.');
        loginPage.checkInvalidCredentialsMessageIsDisplayed(false);

        /* TODO:
          Step #6: Implement the expected result: The MFA page is opened.
          Step #7: Implement receiving and entering the valid MFA code.
          Step #8: Implement clicking the 'Ok' button.
        */
    });
});
