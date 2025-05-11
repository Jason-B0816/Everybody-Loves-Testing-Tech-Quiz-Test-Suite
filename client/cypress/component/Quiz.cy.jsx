import React from 'react';
import Quiz from '../../src/components/Quiz'; // adjust the import path
import { mount } from 'cypress/react';

describe('<Quiz /> Component Test', () => {
  const mockQuestions = [
    { question: 'What is React?', options: ['Library', 'Framework'], correctAnswer: 'Library' },
    { question: 'What is Node.js?', options: ['Browser', 'Runtime'], correctAnswer: 'Runtime' },
  ];

  it('renders the first question', () => {
    mount(<Quiz questions={mockQuestions} />);
    cy.contains('What is React?').should('exist');
  });

  it('navigates to next question after answering', () => {
    mount(<Quiz questions={mockQuestions} />);
    cy.contains('Library').click();
    cy.contains('What is Node.js?').should('exist');
  });

  it('shows score at the end', () => {
    mount(<Quiz questions={mockQuestions} />);
    cy.contains('Library').click();
    cy.contains('Runtime').click();
    cy.contains(/Score/i).should('exist');
  });
});
