Feature: End to end ecommerce application validation 

    Feature Description

    Scenario: Ecommerce products delivery
    Given i open the ecommerce application url
    When i add item to cart
    Then validate the total price
    And select the country dropdown
    And click on the purchese and verify thankyou message