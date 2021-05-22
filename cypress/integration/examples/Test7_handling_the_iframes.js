/// <reference types="Cypress" />
import 'cypress-iframe'
describe('Rahul Setty accodemy', function() {
    it('Web Table', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.frameLoaded('#courses-iframe')

        cy.iframe().find('[href="#/mentorship"]').eq(0).click()

        cy.iframe().find('[class*="pricing-header pricing-header-1"]').should('have.length',2)
        
    })

})