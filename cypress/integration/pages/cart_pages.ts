export class CartPage {
    checkoutButton = '[data-test="checkout"]'
    cartButton = '.shopping_cart_link'
    firstNameTextbox = '[data-test="firstName"]'
    lastNameTextbox = '[data-test="lastName"]'
    postalCodeTextbox = '[data-test="postalCode"]'
    continueButton = '[data-test="continue"]'
    finishButton = '[data-test="finish"]'

    checkout() {
        cy.get(this.checkoutButton).click()
        cy.contains('Checkout: Your Information').should('be.visible')
    }

    inputFirstName(firstName: string) {
        cy.get(this.firstNameTextbox).type(firstName)
    }
    inputLastName(lastName: string) {
        cy.get(this.lastNameTextbox).type(lastName)
    }
    inputPostalCode(postalCode: string) {
        cy.get(this.postalCodeTextbox).type(postalCode)
    }

    fillCheckoutInformation(firstName: string, lastName: string, postalCode: string) {
        this.inputFirstName(firstName)
        this.inputLastName(lastName)
        this.inputPostalCode(postalCode)
    }

    continue() {
        cy.get(this.continueButton).click()
    }

    checkoutOverview() {
        cy.contains("Checkout: Overview").should('be.visible')
    }

    finish(){
        cy.get(this.finishButton).click()
    }

    assertCheckoutSuccess() {
        cy.contains('Thank you for your order').should('be.visible')
        cy.contains('Your order has been dispatched, and will arrive just as fast as the pony can get there!').should('be.visible')
    }

    assertFirstNameEmptyError(){
        cy.contains('Error: First Name is required').should('be.visible')
    }













}