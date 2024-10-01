Feature: Login functionality

  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I log in with username "validUser" and password "validPass"
    Then I should be redirected to the dashboard page
