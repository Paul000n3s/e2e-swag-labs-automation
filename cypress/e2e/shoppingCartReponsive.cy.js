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

  it('Testing responsive for tablet', () => {
    cy.viewport('ipad-2');
    cy.contains('.inventory_item', 'Sauce Labs Backpack')
      .find('.btn_primary')
      .click();
    cy.get('.shopping_cart_badge').should('have.text', '1');
    cy.get('.shopping_cart_badge').click()
    cy.contains('Checkout')
  });

  it('Testing responsive for Smarthone', () => {

    cy.viewport('iphone-6');
    cy.contains('.inventory_item', 'Test.allTheThings() T-Shirt (Red)')
      .find('.btn_primary')
      .click();
    cy.get('.shopping_cart_badge').should('have.text', '1');
    cy.get('.shopping_cart_badge').click()
    cy.contains('Checkout')
  });


})
