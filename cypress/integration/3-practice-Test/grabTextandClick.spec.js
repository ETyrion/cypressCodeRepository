
describe("In this section we will fetch a list of elements, search for a specific one and then click on it",()=>{
    it("Open a site, fetch, find and click",()=>
    {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.wait(3000)
        cy.get('.search-keyword').type('c')
        cy.wait(2000)
        cy.get('.products').find('.product:visible').should('have.length.above',5)
        cy.get('.product:visible').each(($el, index, $list)=>{
            const product_name= $el.find('h4.product-name').text()
            if (product_name.includes('Corn'))
            {
                cy.wrap($el).find('button').click()}
        })
    }
    )
}
)
