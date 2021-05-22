class ProductPage{

    getShopButton(){
        return cy.get('[class="nav-item"]:nth-child(2) > a')
    }

    getShoppingPageHeader(){
        return cy.get('h1.my-4')
    }

    termsCheckBox(){
        return cy.get('#checkbox2')
    }

    checkoutButton(){
        return cy.contains('Checkout')
    }

    contryDropDownBox(){
        return cy.get('#country')
    }

    countryDropdownValue(){
        return cy.get('.suggestions ul > li')
    }

    purcheseButton(){
        return cy.get('[value="Purchase"]')
    }

    succussMessage(){
        return cy.get('.alert.alert-success.alert-dismissible')
    }

    cartItems(){
        return cy.get('h4.media-heading > a')
    }

    removeButtun(){
        return cy.get('.btn.btn-danger')
    }

    productPriceList(){
        return cy.get('tr td:nth-child(4) strong')
    }

    productsTotalAmount(){
       return cy.get('h3 strong')
    }

}
export default ProductPage;