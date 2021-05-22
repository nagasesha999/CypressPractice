/// <references <types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage'
describe("rahul setty acodemy", function(){

    beforeEach(function(){
        cy.fixture('example').then(function(data){
            this.data=data;
        })
    })

    it("reuseble method", function(){
        const homePage= new HomePage();
        cy.visit(this.data.ecommersUrl)

        // cy.get('input[name="name"]:nth-child(2)').as('nameField')
        // cy.get('#exampleFormControlSelect1').as('genderDropdown')
        // cy.get('[class="form-group"]').as('FieldErrorMessages')
        // cy.get('[name="email"]').as('mailField')

        // cy.get('@nameField').type(this.data.name)
        homePage.getNameTextBox().type(this.data.name)
        // cy.get('@nameField').should('have.value', this.data.name)
        homePage.getNameTextBox().should('have.value', this.data.name)

        homePage.getGender().select(this.data.gender)
        homePage.getGender().should('have.value', this.data.gender)
    
        homePage.getNameTextBox().clear().should('have.value','')
        homePage.getEmailTextBox().click()
        // cy.get('.form-group:nth-child(1)').find('.alert.alert-danger').should('have.text','Name is required')
        homePage.getNameErrorMessage().should('have.text','Name is required')

        homePage.getEmailTextBox().click()
        // cy.get('@FieldErrorMessages').eq(1).find('.alert.alert-danger').should('have.text','Email is required')

        homePage.getNameTextBox().should('have.attr','minlength','2')

        homePage.getNameTextBox().type(this.data.name)
        homePage.getNameTextBox().should('have.value', this.data.name)


        homePage.getEmailErrorMessage().should('have.text','Email is required')
        

        homePage.getNameTextBox().clear().should('have.value','')
        homePage.getNameTextBox().type('s')
        homePage.getNameErrorMessage().should('have.text','Name should be at least 2 characters')

        homePage.getEnterpreterRadioButton().should('be.disabled')

        // cy.get('[class="nav-item"]:nth-child(2) > a').click()
    })
})