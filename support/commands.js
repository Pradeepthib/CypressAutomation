// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
/*Cypress.Commands.add('login',function(userType, optons={}){
  const Types = {
    admin: {
      name: 'Swarup',
      admin: true,
    },
    manager:{
      name: 'Hari Krishna',
      admin: false,
    }
  }
  cy.request({
    url: 'http://potens.gymnage.test/auth/login',
    method: 'POST',
    body: {
        email: 'swarup@gymnage.io',
        password: 'gapitu'

    }
  })
})*/
