/// <reference types="Cypress" />

describe('This is a sample test for handling Alerts',()=>{
    it('This is a sample test case for handling Alerts in cypress',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#confirmbtn').click()
        cy.on('window:alert', (str)=>{
            console.log(str)
        })

    })
})

