@Demo
Feature: Demo
  Background:
    Given Me,as an Authenticated guest is on the Products page

    Scenario: Place items to shopping cart
      Given I verify Items exist on the page
      Then I sorts items from the lowest to the highest price
      And I Add items to shopping cart
      And I click on the shopping cart
      And I verify picked items in the shopping cart

      Scenario: Remove item from the shopping cart
        Given I view the shopping cart
        When I remove item from the shopping cart
        Then I verify removed item is not exist in the shopping cart
        And I click on the Continue shopping button
        Then I view the Products page

        Scenario Outline: Checkout item
          Given I Add an item to shopping cart
          When I click on the shopping cart
          Then I verify picked items in the shopping cart
          And I click on the Checkout button
          Then I enter first name "<first name>"
          And I enter last name "<last name>"
          And I enter zip code "<zip code>"
          And I click on the Continue button
          Then I verify picked items on the Checkout page
          And I verify total price
          Then I click on the Finish button
          And I view the Order Confirmation page
          Examples:
          |first name|last name|zip code|
          |Dina      |Murat    |60062   |




