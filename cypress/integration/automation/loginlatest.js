describe('Login', () => {
    beforeEach(() => {
      cy.visit('https://appdev.interakt.ai/');
    });
  
    it('displays the login form', () => {
        cy.get('[data-cy="input-email-login-page"]').should('be.visible');
        cy.get('[data-cy="input-password-login-page"]').should('be.visible');
        cy.get('[data-cy="btn-submit-login-page"]').should('be.visible');
    });
  
    it('fails to login with invalid credentials', () => {
        cy.get('[data-cy="input-email-login-page"]').type('invalid@example.com');
        cy.get('[data-cy="input-password-login-page"]').type('invalidpassword');
        cy.get('[data-cy="btn-submit-login-page"]').click();

      cy.get('.toast-font').should('be.visible');
    });
  
    it('logs in with valid credentials', () => {
        cy.get('[data-cy="input-email-login-page"]').type('chakradhar.papanaboina@cawstudios.com');
        cy.get('[data-cy="input-password-login-page"]').type('Kiwi@123');
        cy.get('[data-cy="btn-submit-login-page"]').click();
      cy.url().should('include', '/inbox');
    });
  });
  