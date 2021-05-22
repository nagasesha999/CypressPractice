/// <references types="Cypress"/>
import ProductPage from '../../support/pageObjects/ProductPage'
describe("oader mobiles", function(){

    beforeEach(function(){
        cy.fixture('example').then(function(data){
            this.data=data;
        })
    })
    it("Shop and add cart", function(){
        Cypress.config('defaultCommandTimeout',10000)
        const productPage = new ProductPage();
        cy.visit(Cypress.env('url')+"angularpractice/")
        cy.get('[class="nav-item"]:nth-child(2) > a').click()
        cy.get('[class="nav-item"]:nth-child(2) > a').as('shopLink')
        cy.get('h1.my-4').as('pageHeadding')
        cy.get('h4.card-title >a').as('products')
        cy.get('div.card-footer').as('addButton')
        cy.get('.nav-link.btn.btn-primary').as('checkoutButton')
        // cy.get('h4.media-heading > a').as('cartItems')
        // cy.get('.btn.btn-success').as('checkOutForBuy')

        // cy.get('@shopLink').click()
        productPage.getShoppingPageHeader().should('have.text','Shop Name')

        // cy.get('@products').each(($el, index, $list) => {
        //     if($el.text().includes(this.data.itemName) || $el.text().includes(this.data.itemName2)){
        //         cy.get('@addButton').eq(index).click()
        //     }
        // })

       this.data.productNames.forEach(function(mobiles){

        cy.selectProduct(mobiles)
       })
      

        productPage.checkoutButton().click()

        productPage.cartItems().should('have.length',3)

        this.data.productNames.forEach(function(mobiles){
            
            cy.VerifyProducts(mobiles)
            
        })
        
        // cy.get('h4.media-heading > a').each(($el, index, $list) =>{
        //     if($el.text().includes(this.data.itemName)||$el.text().includes(this.data.itemName2)){
               
        //         cy.log($el.text())
        //     }
        // })

        var sum =0;
        // product price validation
        productPage.productPriceList().each(($el, index, $list) =>{
            const amount = $el.text()
            var res = amount.split(" ")
            res = res[1].trim()
            sum = Number(sum)+Number(res)
            
        }).then(function(){
            cy.log(sum)
        })

        productPage.productsTotalAmount().then(function(element){
            const amount = element.text()
            var totalAmountText = amount.split(" ")
            var total = totalAmountText[1].trim()
            expect(Number(total)).to.equal(sum)
        })

       productPage.checkoutButton().click()
       

        productPage.contryDropDownBox().type('in')
        productPage.countryDropdownValue().each(($el, index, $list) =>{
            if($el.text().includes('India')){
                cy.wrap($el).click()
            }
        })

    //     // cy.get('#checkbox2').check()
        productPage.termsCheckBox().click({force:true})
        productPage.purcheseButton().click()
        productPage.succussMessage().should('contain','Success! Thank you! Your order will be delivered in next few weeks :-).')
        productPage.succussMessage().then(function(successMessage){
            const message = successMessage.text()
            expect(message).to.contains('Success! Thank you! Your order will be delivered in next few weeks :-).')
        })


        // assert 
        productPage.succussMessage().then(function(successMessage){
            const message = successMessage.text()
            expect(message.includes('Success')).to.be.true
        })

        productPage.checkoutButton().click()

        // cy.get('.btn.btn-danger').as(removeItems)
        productPage.cartItems().each(($el, index, $list) =>{
                if($el.text().includes(this.data.itemName)||$el.text().includes(this.data.itemName2)){
                   productPage.removeButtun().eq(index).click()
                }
        })


        this.data.productNames.forEach(function(mobiles){
            cy.VerifyProducts(mobiles)
        })


        // assert
        productPage.cartItems().each(($el, index, $list) =>{
            if($el.text().includes(this.data.itemName)||$el.text().includes(this.data.itemName2)){
                expect($el.text().includes('Blackberry')).to.be.true
            }
        })

    })

    
})