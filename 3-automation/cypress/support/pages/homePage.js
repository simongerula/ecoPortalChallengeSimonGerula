class HomePage {

    // LOCATORS
    elements = {
        hamburgerMenuButton: ()=> cy.get('a[href="#site-menu"]'),
        darkThemeButton: ()=> cy.get('a[href="/?theme=dark"]'),
        darkThemeCheckBox: ()=> cy.get('a[href="/?theme=dark"] div')

    }

    // ACTIONS
    openHamburgerMenu(){
        this.elements.hamburgerMenuButton()
        .click()
    }

    clickDarkTheme(){
        this.elements.darkThemeButton()
        .click()
    }

    isDarkThemeChecked(){
        this.elements.darkThemeCheckBox()
        .should('have.class', 'faux-radio active')
    }

    // NAVIGATION
    navigateToArsTechnica(){
        cy.visit('/')
    }

}
module.exports = new HomePage