/// <reference types="Cypress" />

describe('My First Test', function() {
    it('Handling window Tabs', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.url().should('include','https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#opentab').invoke('removeAttr','target').click()

        cy.url().should('include','https://www.rahulshettyacademy.com/#/index')
        cy.go('back')
        cy.url().should('include','https://rahulshettyacademy.com/AutomationPractice/')

        
        cy.get('#opentab').then(function(subTab){
            const subUrl = subTab.prop('href')
            cy.visit(subUrl)
        })


    })

})