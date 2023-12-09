// cypress/e2e/shoppingCart.spec.js

describe('Shopping Cart Feature With Checkout', () => {
  beforeEach(() => {
    cy.clearAllCookies()
    cy.clearAllLocalStorage()
    cy.clearAllSessionStorage()
    cy.login()  
  })

  afterEach(() => {
    cy.clearAllCookies()
    cy.clearAllLocalStorage()
    cy.clearAllSessionStorage()
  })

  it('should add and remove an item to the shopping cart and then checkout', () => {

    //Customer can add any available item to cart
    cy.contains('.inventory_item', 'Sauce Labs Backpack')
      .find('.btn_primary')
      .click();
    cy.get('.shopping_cart_badge').should('have.text', '1');

    //Customer can update quantity of item in cart
    cy.contains('.inventory_item', 'Sauce Labs Bike Light')
      .find('.btn_primary')
      .click();
    cy.get('.shopping_cart_badge').should('have.text', '2');

    //Customer can remove item from cart
    cy.contains('.inventory_item', 'Sauce Labs Backpack')
      .find('.btn_secondary')
      .click();
    cy.get('.shopping_cart_badge').should('have.text', '1');

    //Customer can jump to item details
    cy.contains('Sauce Labs Bike Light').click();
    cy.contains("A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.")

    //Customer can start checkout process
    cy.get('.shopping_cart_badge').click()
    cy.get('#checkout').click()
    cy.get('[data-test="firstName"]').type('Test')
    cy.get('[data-test="lastName"]').type('Test')
    cy.get('[data-test="postalCode"]').type('0000-000')
    cy.get('#continue').click()
    cy.get('#finish').click()
    cy.contains('Thank you for your order!')

  })
})
