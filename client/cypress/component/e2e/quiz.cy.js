describe('Tech Quiz E2E Test', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('starts the quiz when Start button is clicked', () => {
      cy.contains('Start Quiz').click();
      cy.get('[data-cy=question]').should('be.visible');
    });
  
    it('cycles through all questions', () => {
      cy.contains('Start Quiz').click();
      for (let i = 0; i < 10; i++) {
        cy.get('[data-cy=option]').first().click();
      }
      cy.contains(/Your Score/i).should('be.visible');
    });
  
    it('can start a new quiz after finishing', () => {
      cy.contains('Start Quiz').click();
      for (let i = 0; i < 10; i++) {
        cy.get('[data-cy=option]').first().click();
      }
      cy.contains('Start New Quiz').click();
      cy.get('[data-cy=question]').should('exist');
    });
  });
  