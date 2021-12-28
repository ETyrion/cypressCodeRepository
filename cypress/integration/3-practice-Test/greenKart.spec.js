

describe("These are the tests for green kart application",()=>{
    it('Open the browser and search for a veggie',()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('to')
        cy.wait(3000)
        cy.get('.product:visible').should('have.length.above',1)
        cy.get('.products').find('.product-action').eq(1).contains('ADD TO CART').click()
    })
})