export class ProductPage{
    addToCartButton = '[data-test="add-to-cart-sauce-labs-backpack"]'
    cartButton = '.shopping_cart_link'

    addCart(){
        cy.get(this.addToCartButton).click()
        cy.contains('Remove').should('be.visible')
    }

    goToCart(){
        cy.get(this.cartButton).click()
        cy.contains('Your Cart').should('be.visible')
    }

}