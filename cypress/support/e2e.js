import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command'
require('cypress-iframe');

addMatchImageSnapshotCommand({
  failureThreshold: 0.03, // threshold for entire image
  failureThresholdType: 'percent', // percent of image or number of pixels
  customDiffConfig: { threshold: 0.1 }, // threshold for each pixel
  capture: 'viewport', // capture viewport in screenshot
})

Cypress.Commands.add('setResolution', size => {
  if (Cypress._.isArray(size)) {
    cy.viewport(size[0], size[1])
  } else {
    cy.viewport(size)
  }
})

Cypress.Commands.add('login', (username, password) => {
	cy.get('#Username').type(username)
	cy.get('#Password').type(password)
	cy.contains('Log in').click()
})

Cypress.Commands.add('isVisible', (selector)=>{
  cy.get(selector).should('be.visible')
})

Cypress.Commands.add('acceptCookies', ()=>{
    if(cy.isVisible('#cookie-banner')){
      cy.contains(' OK').click()
    }
})

Cypress.Commands.add('isHidden', (selector)=>{
  cy.get(selector).should('not.exist')
})

Cypress.Commands.add('setRessolution', (size)=>{
  if(Cypress._.isArray(size)){
    cy.viewport(size[0], size[1])
  } else {
    cy.viewport(size)
  }
})

// Cypress.Commands.add('getIframeDocument',() => {
//   return cy
//   .get('iframe[data-testid="app-frame"]')
//   // Cypress yields jQuery element, which has the real
//   // DOM element under property "0".
//   // From the real DOM iframe element we can get
//   // the "document" element, it is stored in "contentDocument" property
//   // Cypress "its" command can access deep properties using dot notation
//   // https://on.cypress.io/its
//   .its('0.contentDocument').should('exist')
// })