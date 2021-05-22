/// <reference types="Cypress" />

describe('My First Test', function() {
    it('launch rahul setty site', function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('input[placeholder="Search for Vegetables and Fruits"]').type('ca')


        cy.get('.product').should('have.length',5)
        cy.get('div[class="product"]').should('have.length',4)
        cy.get('.products').find('.product').should('have.length',4)

        cy.get('div[class="products"]').find('div[class="product"]').eq(2).contains('ADD TO CART').click()
        // click specific element using list 
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const veg = $el.find('h4[class="product-name"]').text()
            if(veg.includes('Cashews')){
               cy.wrap($el).find('button').click()
            }
        })

        // to get the text from the selected element
        // bellow step is invalid. cypress promise is resoved if you using like this this is not cypress command
        
        // const textFromLogo = cy.get('.brand.greenLogo').text()
        // cy.log(textFromLogo)

        // if you handle promise by manualy like below step. then we can print the text from selected element
        cy.get('.brand.greenLogo').then(function(logoText){
            cy.log(logoText.text())

            
        })

        cy.get('.brand.greenLogo').should('have.text','GREENKART')

    })

})