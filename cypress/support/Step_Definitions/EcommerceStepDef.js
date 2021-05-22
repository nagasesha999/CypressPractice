/// <reference types="Cypress"/>

import {Given, When, Then } from "cypress-cucumber-preprocessor/steps"

Given('i open the ecommerce application url', () =>{
    cy.visit(Cypress.env('url')+"angularpractice/")
})

//When i add item to cart
When('i add item to cart', ()=>{

})

//Then validate the total price
Then('validate the total price', () =>{

})

//And select the country dropdown
Then('select the country dropdown', ()=>{

})

//And click on the purchese and verify thankyou message
Then('click on the purchese and verify thankyou message', ()=>{
    
})