





Feature: Join 22 
  
   
  Scenario: Join 22 
    Given user is in the Join  22 page
    And user enters "Parigul" in the first name text box
    And user enters "GulJan" in the last name text box
    When user select Country/Region "USA" 
    And user enters "22191" in zip/postalcode text box
    And user enters "Parigul@hotmail.com" in the email text box
    When user enters "Parigulgulmjan!" in password text box
    And user confirms "Parigulgulmjan!" in password text box
    Then user Close the Page


   