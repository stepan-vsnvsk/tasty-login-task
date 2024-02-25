export default class Helpers {
    static getPassword(email) {
        const [account, _] = email.split('@');
        return Cypress.env(account);
    }
}
