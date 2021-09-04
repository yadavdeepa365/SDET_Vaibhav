
export const verifyHeaderValueOnCard = () => {
    cy.log('Verify the value of h2 on the result card');
    cy.get('[data-cel-widget="search_result_1"]').as('result');
    cy.get('@result').find('h2 a span')
        .should('include.text', 'iPad Air')
        .should('include.text', '64GB')
        .should('include.text', 'Space Grey');
};

export const clickOnFirstCard = () => {
    cy.log('Click on first result card');
    cy.get('[data-cel-widget="search_result_1"]').find('h2 a span').click();
};

export const verifyOnResultsPage = () => {
    cy.log('Vrify on results page');
    cy.url('href')
        .should('include', 's?')
        .should('include', 'ipad')
        .should('include', 'air')
        .should('include', '64gb');
};
