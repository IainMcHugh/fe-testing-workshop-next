describe('Form A integration test', () => {
  beforeEach(() => {
    cy.intercept('/api/submission').as('submission');
  });
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

  it('last name fe-connect and currency EUR changes to USD', () => {
    cy.visit('/form_a');

    cy.getByLabel('Currency').type('EUR');
    cy.getByLabel('Last Name').type('fe-connect');

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

  it('will submit the form with the correct values', () => {
    cy.visit('/form_a');

    cy.getByLabel('First Name').type('John');
    cy.getByLabel('Last Name').type('Doe');
    cy.getByLabel('Phone Number').type('0871234567');
    cy.getByLabel('Email').type('john.doe@gmail.com');
    cy.getByLabel('Currency').type('EUR');
    cy.getByLabel('Price').type('1011');

    cy.getByLabel('First Name').should('have.value', 'John');
    cy.getByLabel('Last Name').should('have.value', 'Doe');
    cy.getByLabel('Phone Number').should('have.value', '0871234567');
    cy.getByLabel('Email').should('have.value', 'john.doe@gmail.com');
    cy.getByLabel('Currency').should('have.value', 'EUR');
    cy.getByLabel('Price').should('have.value', '1011');

    cy.get('button').click();
    cy.wait('@submission').then((xhr) => {
      const { body } = xhr.request;
      expect(body.firstName).to.deep.equal('John');
      expect(body.lastName).to.deep.equal('Doe');
      expect(body.phoneNumber).to.deep.equal('0871234567');
      expect(body.email).to.deep.equal('john.doe@gmail.com');
      expect(body.currency).to.deep.equal('EUR');
      expect(body.price).to.deep.equal('1011');
    });
  });
});
