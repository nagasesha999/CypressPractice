/// <references <types="Cypress" />

describe("rahul setty acodemy", function(){

    beforeEach(function(){
        cy.fixture('example').then(function(data){
            this.data=data;
        })
    })

    it("reuseble method", function(){
        cy.visit(this.data.ecommersUrl)

        cy.get('input[name="name"]:nth-child(2)').as('nameField')
        cy.get('#exampleFormControlSelect1').as('genderDropdown')
        cy.get('[class="form-group"]').as('FieldErrorMessages')
        cy.get('[name="email"]').as('mailField')

        cy.get('@nameField').type(this.data.name)

        cy.get('@nameField').should('have.value', this.data.name)

        cy.get('@genderDropdown').select(this.data.gender)
        cy.get('@genderDropdown').should('have.value', this.data.gender)
    
        cy.get('@nameField').clear().should('have.value','')
        cy.get('[name="email"]').click()
        // cy.get('.form-group:nth-child(1)').find('.alert.alert-danger').should('have.text','Name is required')
        cy.get('@FieldErrorMessages').eq(0).find('.alert.alert-danger').should('have.text','Name is required')

        cy.get('@mailField').click()
        // cy.get('@FieldErrorMessages').eq(1).find('.alert.alert-danger').should('have.text','Email is required')

        cy.get('@nameField').should('have.attr','minlength','2')

        cy.get('@nameField').type(this.data.name)
        cy.get('input[name="name"]:nth-child(1)').should('have.value', this.data.name)


        cy.get('@FieldErrorMessages').eq(1).find('.alert.alert-danger').should('have.text','Email is required')
        

        cy.get('@nameField').clear().should('have.value','')
        cy.get('@nameField').type('s')
        cy.get('@FieldErrorMessages').eq(0).find('.alert.alert-danger').should('have.text','Name should be at least 2 characters')


        cy.get('[class="nav-item"]:nth-child(2) > a').click()
    })

    it("Shop and add cart", function(){
        cy.get('[class="nav-item"]:nth-child(2) > a').as('shopLink')
        cy.get('h1.my-4').as('pageHeadding')
        cy.get('h4.card-title >a').as('products')
        cy.get('div.card-footer').as('addButton')
        cy.get('.nav-link.btn.btn-primary').as('checkoutButton')
        // cy.get('h4.media-heading > a').as('cartItems')
        // cy.get('.btn.btn-success').as('checkOutForBuy')

        // cy.get('@shopLink').click()
        cy.get('@pageHeadding').should('have.text','Shop Name')

        cy.get('@products').each(($el, index, $list) => {
            if($el.text().includes(this.data.itemName) || $el.text().includes(this.data.itemName2)){
                cy.get('@addButton').eq(index).click()
            }
        })

       
       cy.selectProduct('Samsung Note 8')

        cy.get('@checkoutButton').click()

        cy.get('h4.media-heading > a').should('have.length',3)
        
        cy.get('h4.media-heading > a').each(($el, index, $list) =>{
            if($el.text().includes(this.data.itemName)||$el.text().includes(this.data.itemName2)){
               
                cy.log($el.text())
            }
        })

// navigate back to shopping
        // cy.get('.btn.btn-default').click()
        // cy.get('@products').each(($el, index, $list) => {
        //     if($el.text().includes(this.data.itemName3)){
        //         cy.get('@addButton').eq(index).click()
        //     }
        // })


// again cart items
// cy.get('@checkoutButton').click()

        // cy.get('h4.media-heading > a').should('have.length',2)
        
        // cy.get('h4.media-heading > a').each(($el, index, $list) =>{
        //     if($el.text().includes(this.data.itemName)||$el.text().includes(this.data.itemName2)){
               
        //         cy.log($el.text())
        //     }
        // })

       cy.get('.btn.btn-success').click()
        cy.get('#country').type('in')
        cy.get('.suggestions ul > li').each(($el, index, $list) =>{
            if($el.text().includes('India')){
                cy.wrap($el).click()
            }
        })

        // cy.get('#checkbox2').check()
        cy.get('[value="Purchase"]').click()
        cy.get('.alert.alert-success.alert-dismissible').should('contain','Success! Thank you! Your order will be delivered in next few weeks :-).')
        cy.get('.alert.alert-success.alert-dismissible').then(function(successMessage){
            const message = successMessage.text()
            cy.log(message)
            expect(message).to.contains('Success! Thank you! Your order will be delivered in next few weeks :-).')
        })
    })
})