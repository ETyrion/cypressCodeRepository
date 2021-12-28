
describe('Do end to end Automation of Green Kart',()=>{
    it('Do end to end Automation of Green Kart',()=>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.wait(1000)
        cy.get('.search-keyword').type('ca')
        cy.get('.products:visible').find('.product').should('have.length.above',2)
        cy.get('.products:visible').find('.product').each(($el, index ,$list)=>{
            const prod_name = $el.find('h4.product-name').text()
            if(prod_name.includes('Cauliflower'))
            {
                cy.wrap($el).find('.increment').click()
                cy.wait(2000)
                cy.wrap($el).find('button').click()
            }
        }
        )
        cy.get('.cart-icon').click()
        cy.wait(2000)
        cy.contains('PROCEED TO CHECKOUT').click()

    })
})