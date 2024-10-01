import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

import LoginPage from '../../e2e/pages/loginPage/LoginPage';

const loginPage = new LoginPage()

Given("I am on the login page", () => {
  cy.visit('https://google.com/'); // Adjust the URL as needed
});

When("I log in with username {string} and password {string}", (username, password) => {
 
});

Then("I should be redirected to the dashboard page", () => {
});