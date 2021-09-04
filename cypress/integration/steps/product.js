
export const verifyOnProductPage = () => {
    cy.log('Verify on product page');
    cy.get('h1 #productTitle')
        .should('include.text', 'iPad Air')
        .should('include.text', '64GB')
        .should('include.text', 'Space Grey');
};

export const verifyItemInStock = () => {
    cy.log('Verify item is in stock');
    cy.get('#desktop_qualifiedBuyBox').find('#availability span')
        .should('include.text', 'In stock');
};

export const addAccessories = (item, itemName) => {
    cy.log('Add extra accessories to order');
    cy.get('.simpleBundleCheckBoxArea').as('item1');
    cy.get('@item1').find('[type="checkbox"]').eq(item).as('items');
    cy.get('@items').check()
        .should('be.checked');
    cy.get('@items').siblings().eq(1)
        .should('include.text', itemName);
};

export const clickAddToCartCta = () => {
    cy.log('Click add to cart CTA');
    cy.get('#add-to-cart-button').click();
};

export const clickNoCoverage = () => {
    cy.log('Click no coverage option');
    cy.get('#attachSiNoCoverage').click();
};
