class HomePage{
    getNameTextBox(){
       return cy.get('input[name="name"]:nth-child(2)')
    }

    getGender(){
        return cy.get('#exampleFormControlSelect1')
    }
    
    getNameErrorMessage(){
       return cy.get('[class="form-group"]:nth-child(1) div')
    }
    
    getEmailTextBox(){
       return cy.get('[name="email"]')
    }

    getEmailErrorMessage(){
        return cy.get('[class="form-group"]:nth-child(2) div')
    }
    
    GetTwoWayBindingName(){
        return cy.get('input[name="name"]:nth-child(1)')
    }

    getEnterpreterRadioButton(){
        return cy.get('#inlineRadio3')
    }

}
export default HomePage;