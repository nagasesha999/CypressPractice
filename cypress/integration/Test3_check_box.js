/// <reference types="Cypress" />

describe('My First Test', function() {
    it('Handling check boxes', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[id*=checkBoxOption]').check(['option2','option3']).should('be.checked',[['option2','option3']])
        cy.get('input[id*=checkBoxOption]').uncheck(['option2','option3']).should('not.be.checked',[['option2','option3']])


        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('input[id*=checkBoxOption]').check(['option2','option3']).should('be.checked',['option2','option3'])




        cy.get('#dropdown-class-example').select('Option2').should('have.value','option2')
        cy.get('#dropdown-class-example').select('Option1').should('have.value','option1')
        cy.get('#dropdown-class-example').select('Option3').should('have.value','option3')


        cy.get('input[id=autocomplete]').type('in')

        cy.get('.ui-menu-item > div').each(($el, index,$list) =>{
            if($el.text() === 'India'){
                cy.wrap($el).click()
            }
        })


        cy.get('input[id=autocomplete]').should('have.value','India')

        // RADIO BUTTON

        cy.get('.radioButton').check('radio2').should('be.checked').and('have.value','radio2')
        

        // visible or disable 

        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
    


       

    })

})