
describe("2nd Attempt at understanding loops",()=>{
    it("fetch and click on a desired element",()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.wait(1000)
        cy.get('.search-keyword').type('c')
        cy.get('.products:visible').find('.product').should('have.length.above',3)
        cy.wait(1000)
        cy.get('.products:visible').find('.product').each(($el, index, $list)=>{
            const prod_name = $el.find('h4.product-name').text()
            if (prod_name.includes('Carrot - 1 Kg'))
            {
                cy.wrap($el).find('button').click()
            }

        }
        )
    })
})