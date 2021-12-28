/// <reference types="cypress" />

// Welcome to Cypress!
//

describe("Radio button and assertions on it",()=>{
    it("Checkboxes code and assertions on it",()=>{
        cy.visit('https://www.google.com/')
        cy.get('.a4bIc').type('iphone')
        cy.wait(3000)
        cy.get('.OBMEnb ul li div div div').each(($el, index, $list)=>{
            if($el.text()==='iphone 13 price')
            {
                cy.wrap($el).click()
            }
        })
    })

    it("Checkboxes code and assertions on it",()=>{
        cy.visit('https://www.google.com/')
        cy.get('.a4bIc').type('apple')
        cy.wait(3000)
        cy.get('.OBMEnb ul li div div div').each(($el, index, $list)=>{
            if($el.text()==='apple store')
            {
                cy.wrap($el).click()
            }
        })
    })
})