#Author: your.email@your.domain.com
#Keywords Summary :

Feature: Join Marriott Bonvoy 
 

  
  Scenario: Join Marriott Bonvoy
    Given user is in the Join page
    And user enters first name
    And user enters last name
    When user select country/region
    And user enters zip/postalcode
    And user enters email
    When user enters password
    And user confirms password
    Then user close the page
    

  
