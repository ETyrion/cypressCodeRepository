/// <reference types="Cypress" />

describe('This is a sample test for handling Alerts',()=>{

    it('Handling JS Confirm - Click Cancel', () => {
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm', () => false);
        cy.get('#result').contains('You clicked: Cancel')
    })
    }
    )