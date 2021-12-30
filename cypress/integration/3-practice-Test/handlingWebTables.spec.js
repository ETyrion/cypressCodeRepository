/// <reference types="Cypress" />

describe('This is a sample test for handling web Tables',()=>{

    it('This is a sample test for handling web Tables', () => {
        cy.visit('https://sqengineer.com/practice-sites/practice-tables-selenium/')

        cy.get('tr td:nth-child(1)').each(($el, index, $list) =>{
            const course = $el.text()
            if (course==='UFT')
            {
                cy.get('tr td:nth-child(1)').eq(index).next().then(function(link_text)
                {
                    const price = link_text.text()
                    console.log(price)
                })
            }
        
            }    )
    }
    )
})