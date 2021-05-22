/// <reference types="Cypress" />

describe('My First Test', function() {
    it('Alert popup handling', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       cy.get('#alertbtn').click()
    //    cy.get('#confirmbtn').click()


        cy.on('window:alert', (str) => {
            expect(str).to.eql('Hello , share this practice page and share your knowledge')
        })

        cy.get('#confirmbtn').click()

        cy.on('window:confirm', (str) => {
           
            expect(str).to.eql('Hello , Are you sure you want to confirm?')
        })

    })

})