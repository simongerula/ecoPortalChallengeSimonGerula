import {
    Given,
    When,
    Then
} from "@badeball/cypress-cucumber-preprocessor"

// Import Page Object Model
const homePage = require("../../support/pages/homePage")

When('I open the hamburger menu on Home Page', () => {
    homePage.navigateToArsTechnica()
    homePage.openHamburgerMenu()
})

When('I select a dark site theme', () => {
    homePage.clickDarkTheme()
})

Then('The homepage is shown with the selected theme', () => {
    homePage.openHamburgerMenu()
    homePage.isDarkThemeChecked()
})