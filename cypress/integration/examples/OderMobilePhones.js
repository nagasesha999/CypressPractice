/// <references types="Cypress"/>

describe("oader mobiles", function(){

    beforeEach(function(){
        cy.fixture('example').then(function(data){
            this.data=data;
        })
    })
    it("Shop and add cart", function(){
        cy.visit(this.data.ecommersUrl)
        cy.get('[class="nav-item"]:nth-child(2) > a').click()
        cy.get('[class="nav-item"]:nth-child(2) > a').as('shopLink')
        cy.get('h1.my-4').as('pageHeadding')
        cy.get('h4.card-title >a').as('products')
        cy.get('div.card-footer').as('addButton')
        cy.get('.nav-link.btn.btn-primary').as('checkoutButton')
        // cy.get('h4.media-heading > a').as('cartItems')
        // cy.get('.btn.btn-success').as('checkOutForBuy')

        // cy.get('@shopLink').click()
        cy.get('@pageHeadding').should('have.text','Shop Name')

        // cy.get('@products').each(($el, index, $list) => {
        //     if($el.text().includes(this.data.itemName) || $el.text().includes(this.data.itemName2)){
        //         cy.get('@addButton').eq(index).click()
        //     }
        // })

       this.data.productNames.forEach(function(mobiles){

        cy.selectProduct(mobiles)
       })
      

        cy.get('@checkoutButton').click()

        cy.get('h4.media-heading > a').should('have.length',3)

        this.data.productNames.forEach(function(mobiles){
            
            cy.VerifyProducts(mobiles)
            
        })
        
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

    //     // cy.get('#checkbox2').check()
        cy.get('[value="Purchase"]').click()
        cy.get('.alert.alert-success.alert-dismissible').should('contain','Success! Thank you! Your order will be delivered in next few weeks :-).')
        cy.get('.alert.alert-success.alert-dismissible').then(function(successMessage){
            const message = successMessage.text()
            cy.log(message)
            expect(message).to.contains('Success! Thank you! Your order will be delivered in next few weeks :-).')
        })

        cy.get('@checkoutButton').click()

        // cy.get('.btn.btn-danger').as(removeItems)
        cy.get('h4.media-heading > a').each(($el, index, $list) =>{
                if($el.text().includes(this.data.itemName)||$el.text().includes(this.data.itemName2)){
                   cy.get('.btn.btn-danger').eq(index).click()
                }
        })


        this.data.productNames.forEach(function(mobiles){
            cy.VerifyProducts(mobiles)
        })

    })

    
})