require('cypress-iframe');

describe('Schedule page validation', () => {
	before(function() {
		cy.visit('https://test1234.planday.com/index.html')
		cy.viewport(1280, 720)
		cy.acceptCookies()
	})

	it('Going to the shedule tab.', () => {
		cy.login('plandayqa@outlook.com', 'APItesting21')
		cy.get("a[title=Schedule]").should("be.visible")
        cy.contains('Schedule').click()
        cy.url().should('include', 'https://test1234.planday.com/schedule');
		cy.frameLoaded('iframe[title="Page content"]')
		cy.wait(5000)
		// getIframeBody().contains('Employee One').should("be.visible")
		cy.get('iframe[data-testid="app-frame"]').its('0.contentDocument').its('body').then(cy.wrap).find('Employee One').should('be.visible');
	})	

})

const getIframeDocument = () => {
	return cy
	.get('iframe[data-testid="app-frame"]')
	// Cypress yields jQuery element, which has the real
	// DOM element under property "0".
	// From the real DOM iframe element we can get
	// the "document" element, it is stored in "contentDocument" property
	// Cypress "its" command can access deep properties using dot notation
	// https://on.cypress.io/its
	.its('0.contentDocument').should('exist')
  }
  
  const getIframeBody = () => {
	// get the document
	return getIframeDocument()
	// automatically retries until body is loaded
	.its('body').should('not.be.undefined')
	// wraps "body" DOM element to allow
	// chaining more Cypress commands, like ".find(...)"
	.then(cy.wrap)
  }