## Installation
Ensure you have Node.js installed.
After cloning the repository, navigate to the directory and run:
`npm install`

## Credentials
The tests rely on the use of two test accounts:
-   An ABTasty user
-   A user utilizing a SSO

The emails need to be configured in the `cypress/fixtures/login-test-data.json` file (validABTastyUser.email and validSSOUser.email).
Additionally, a password for an ABTasty user email must be set as an environment variable in the following manner:
CYPRESS_validABTastyEmail=secret (excluding the @domain-part).
