# Practical Challenge for QA Roles at ecoPortal
***
### Automated Scenario to test the theme selector on https://arstechnica.com
### Cypress 12 + Cucumber (BDD)

### Dependencies

Cypress                                 -> $ npm install --save-dev cypress
@bahmutov/cypress-esbuild-preprocessor  -> $ npm install --save-dev @bahmutov/cypress-esbuild-preprocessor
@badeball/cypress-cucumber-preprocessor -> $ npm install --save-dev @badeball/cypress-cucumber-preprocessor
esbuild                                 -> $ npm install --save-dev esbuild

You can install all the packages with $ npm install 

***

The scenario contains three steps:
1. Open the hamburger menu on Home Page
2. Select a dark site theme
3. Test if the homepage is shown with the selected theme

***

### How to run the test

Run the test on Electron
> $ npm run cy:run

Run the test on Chrome headless
> $ npm run cy:run:chrome

Run the test on Chrome visible in browser
> $ npm run cy:run:chrome:headed