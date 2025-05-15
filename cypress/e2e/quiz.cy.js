describe('Quiz E2E Test', () => {
  beforeEach(() => {
    cy.intercept("/api/questions/random", {
      statusCode: 200,
      fixture: "questions.json",
    })
  
    // cy.mount(<Quiz />);
    cy.visit("/")
  })


  it('should show a Start Quiz button at the beginning', () => {
    cy.get("button").should('contain', 'Start Quiz');
    // cy.get('h1').contains('Tech Quiz');
  });


  it("should show the first question after clicking Start Quiz", () => {
    cy.get("button").contains('Start Quiz').click();

    cy.get('h2').should('contain', 'What is the keyword to define a class in Python?');
  })

  it("should show the second question after clicking an answer", () => {
    cy.get("button").contains('Start Quiz').click();

    cy.get("button").contains("1").click()

    cy.get('h2').should('contain', 'Which of the following is not a built-in data type in Python?');
  })


  it("should show the end page after clicking answer from 2nd", () => {
    cy.get("button").contains('Start Quiz').click();

    cy.get("button").contains("1").click()
    cy.get("button").contains("1").click()

    cy.get('h2').should('contain', 'Quiz Completed');
  })


  it("should show the first question again after clicking Take New Quiz button", () => {
    cy.get("button").contains('Start Quiz').click();

    cy.get("button").contains("1").click()
    cy.get("button").contains("1").click()

    cy.get("button").contains('Take New Quiz').click();

    cy.get('h2').should('contain', 'What is the keyword to define a class in Python?');
  })
});
