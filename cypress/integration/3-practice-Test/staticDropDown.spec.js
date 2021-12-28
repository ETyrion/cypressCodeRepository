/// <reference types="cypress" />

describe("Radio button and assertions on it",()=>{
    it("Checkboxes code and assertions on it",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('select').select('Option3').should('have.value', 'option3')
    })

    it("Checkboxes code and assertions on it",()=>{
        cy.get('#autocomplete').type('us')
        cy.get('#ui-id-1 li .ui-menu-item-wrapper').each(($el, index, $list)=>{
            if($el.text()==='United States (USA)')
            {
                cy.wrap($el).click()
            }

        })
    })
})