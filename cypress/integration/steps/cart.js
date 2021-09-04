
export const goToBasket = () => {
    cy.log('click and go to basket');
    cy.get('#attach-view-cart-button-form').click();
};

export const verifyOnBasketPage = () => {
    cy.log('Verify user is on basket page');
    cy.url('href').should('include', '/cart/view');
};

export const checkBasketItemsTotal = () => {
    cy.log('Check number of items in basket');
    cy.get('#sc-subtotal-label-buybox').should('include.text', '3 items');
};

export const checkBasketPriceTotal = () => {
    cy.log('Check basket total price');
    cy.get('#sc-subtotal-amount-buybox span').should('include.text', '£789.97');
};
