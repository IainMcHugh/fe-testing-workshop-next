describe('Form A integration test', () => {
  it('blurring firstName clears panels B and C', () => {
    cy.visit('/form_a');

    cy.getByLabel('Phone Number').type('0871234567');
    cy.getByLabel('Email').type('john.doe@gmail.com');
    cy.getByLabel('Currency').type('EUR');
    cy.getByLabel('Price').type('1011');

    cy.getByLabel('Phone Number').should('have.value', '0871234567');
    cy.getByLabel('Email').should('have.value', 'john.doe@gmail.com');
    cy.getByLabel('Currency').should('have.value', 'EUR');
    cy.getByLabel('Price').should('have.value', '1011');

    cy.getByLabel('First Name').type('John').blur();

    cy.getByLabel('Phone Number').should('have.value', '');
    cy.getByLabel('Email').should('have.value', '');
    cy.getByLabel('Currency').should('have.value', '');
    cy.getByLabel('Price').should('have.value', '');
  });

  it('last name messy and currency EUR changes to USD', () => {
    cy.visit('/form_a');

    cy.getByLabel('Currency').type('EUR');
    cy.getByLabel('Last Name').type('messy');

    cy.getByLabel('Currency').should('have.value', 'USD');
  });

  it('blurring any field in panel B will clear panel C fields', () => {
    cy.visit('/form_a');

    cy.getByLabel('Currency').type('EUR');
    cy.getByLabel('Price').type('1011');
    cy.getByLabel('Phone Number').type('0871234567').blur();

    cy.getByLabel('Currency').should('have.value', '');
    cy.getByLabel('Price').should('have.value', '');

    cy.getByLabel('Currency').type('EUR');
    cy.getByLabel('Price').type('1011');
    cy.getByLabel('Email').type('john.doe@gmail.com').blur();

    cy.getByLabel('Currency').should('have.value', '');
    cy.getByLabel('Price').should('have.value', '');
  });
});
