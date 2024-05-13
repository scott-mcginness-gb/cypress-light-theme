describe('alias and session', () => {
  let valid = 'ok';

  before(() => {
    Cypress.session.clearAllSavedSessions();
    cy.session(
      '1',
      () => {},
      {
        validate() {
          if (valid !== 'ok') {
            valid = 'ok'; // Reset the flag.
            return false;
          }

          return valid === 'ok'
        }
      });
  })

  it('shows aliases', () => {
    cy.intercept('GET', '**/comments/*').as('getComment')
    cy.intercept('POST', '**/comments') // Unnamed alias

    cy.visit('https://example.cypress.io/commands/network-requests')

    cy.contains('Get Comment').click();
    cy.contains('Post Comment').click();

    cy.contains('POST successful!').should('be.visible');
  })

  it('shows session', () => {
    cy.visit('https://example.cypress.io')
  })

  it('shows restored session', () => {
    cy.session('1');
    cy.visit('https://example.cypress.io')
  })

  it('shows recreated session', () => {
    valid = 'not ok' // Force recreation.
    cy.session('1');
    cy.visit('https://example.cypress.io')
  })
})