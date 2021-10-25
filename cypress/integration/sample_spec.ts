describe('My First Test', () => {
    it('Visits app page', () => {
        cy.visit('http://localhost:3000');
        // cy.get('.min-h-screen').click();
        // cy.get(':nth-child(1) > .mt-1 > .flex > .appearance-none').dblclick();
        // cy.get(':nth-child(1) > .mt-1 > .flex > .appearance-none').click();
        // cy.get(':nth-child(1) > .mt-1 > .flex > .appearance-none').type('{backspace}');
        // cy.get(':nth-child(1) > .mt-1 > .flex > .appearance-none').type('asd@sdasd.com');
        // cy.get(':nth-child(2) > .mt-1 > .flex > .appearance-none').type('asdsadasdasd');
        // cy.get('.px-4').click();
        // cy.get('.items-start > div:nth-child(2)').dblclick();
        // cy.get('.items-start > div:nth-child(2)').click();
        cy.get('p').click()
    })
})