/// <reference types="Cypress" />
describe("Checkboxes code and assertions on it",()=>{
    it("Checkboxes code and assertions on it",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('input[type="checkbox"]').check(['option1','option2'])
        cy.get('#checkBoxOption1').should('be.checked')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    })
})


describe("Radio button and assertions on it",()=>{
    it("Checkboxes code and assertions on it",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('input[value="radio3"]').should('not.be.checked')
        cy.get('input[value="radio3"]').click()
        cy.wait(3000)
        cy.get('input[value="radio3"]').should('be.checked')
    })
})

describe("Validate visibility of element",()=>{
    it("Checkboxes code and assertions on it",()=>{
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.wait(3000)
        cy.get('#displayed-text').should('not.be.visible')
    })
})