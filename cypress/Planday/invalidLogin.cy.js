describe('Login / Invalid data Test', () => {
	before(function() {
		cy.visit('https://test1234.planday.com/index.html')
		cy.acceptCookies()
	})

	it('Verify that the main login fields and buttons are displayed.', () => {
		cy.get("form[id=login]").should("be.visible");
		cy.isVisible('#Username')
		cy.isVisible('#Password')
		cy.isVisible('#MainLoginButton')
	})

	it('should try to login with invalid data', () => {
		cy.login('invalidUsername', 'invalidPassword')
		if(cy.isVisible('#cookie-banner')){
			cy.contains(' OK').click()
			cy.login('invalidUsername', 'invalidPassword')
		}
		cy.contains('The username or password is incorrect.').should("be.visible")
	})

})