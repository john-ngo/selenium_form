// Open https://the-internet.herokuapp.com/login

// Please automate next test cases:
// 1. Login with valid creds (tomsmith/SuperSecretPassword!) and assert you successfully logged in
// 2. Login with invalid creds and check validation error
// 3. Logout from app and assert you successfully logged out

/// <reference types="cypress" />

it('Task 1', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('[type="text"]').type('tomsmith');
    cy.get('[type="password"]').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('.subheader').should('have.text', 'Welcome to the Secure Area. When you are done click logout below.');
});

it('Task 2', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('[type="text"]').type('o');
    cy.get('[type="password"]').type('o!');
    cy.get('.radius').click();
    cy.get('.flash.error').should('have.text', '\n            Your username is invalid!\n            ×\n          ');
});

it('Task 3', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('[type="text"]').type('tomsmith');
    cy.get('[type="password"]').type('SuperSecretPassword!');
    cy.get('.radius').click();
    cy.get('.button.secondary.radius').click();
    cy.get('.flash.success').should('have.text', '\n            You logged out of the secure area!\n            ×\n          ');
});