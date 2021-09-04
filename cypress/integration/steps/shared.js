
export const acceptCookieBanner = () => {
    cy.log('Accept cookie banner');
    cy.get('#sp-cc-accept').click();
};

export const typeInSearch = (product) => {
    cy.log('Type in search box');
    cy.get('.nav-search-field ').as('searchbox');
    cy.get('@searchbox').find('input')
        .type(product).type('{enter}');
};

export const pageScreenshot = () => {
    cy.log('Take screenshot of whole page and store in screenshots folder');
    cy.screenshot();
};
