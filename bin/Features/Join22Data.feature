#Author: your.email@your.domain.com
#Keywords Summary :

Feature: Join with Data Table

  @Smoke   @Regression
  Scenario Outline: Join with Data Table
   
    Given user is in the Join  22 page
    When user enters "<FirstName>" in first name text box
    And user enters "<LastName>" in last name text box
    When user select Country/Region "USA" 
    And user enters "<ZipCode>" in zip/postalcode text box
    And user enters "<Email>" in email text box
    When user enters "<Password>" in password text box
    And user confirms "<ConfirmPassword>" in password text box
    Then user Close the Page


    Examples: 
      | FirstName  | LastName |    ZipCode   |       Email       |  Password  |ConfrimPassword|
      | Parigul    | Gulali   |     22191    |Parigul@hotmail.com|  Parigul@1 |  Parigul@gmail.com  |
      | Qarigul    | Qulali   |     22192    |Qarigul@hotmail.com|  Qarigul@1 |  Qarigul@gmail.com  |
      | Sarigul    | Sulali   |     22195    |Sarigul@hotmail.com|  Sarigul@1 |  Sarigul@gmail.com  |
      | Parigul    | Gulali   |     22191    |Parigul@hotmail.com|  Parigul@1 |  Parigul@gmail.com  |
      | KHrigul    | KHlali   |     22080    |KHrigul@hotmail.com|  KHrigul@1 |  KHrigul@gmail.com  |
      | Parigul    | Gulali   |     22191    |Parigul@hotmail.com|  Parigul@1 |  Parigul@gmail.com  |
      | SPOigul    | SPOali   |     22079    |SPOigul@hotmail.com|  SPOigul@1 |  SPOigul@gmail.com  |
