import BasePage from '../base-page';
import ForgotYourPasswordPageLabels from '../../../constants/translations/login-pages/forgot-your-password-labels';

export default class ForgotYourPasswordPage extends BasePage {
    returnToLoginBtn = '[data-testid="chevronAloneLeftIcon"]';
    pageElementsTranslations = ForgotYourPasswordPageLabels;

    clickBackToLoginBtn() {
        cy.get(this.returnToLoginBtn).click();
    }
}
