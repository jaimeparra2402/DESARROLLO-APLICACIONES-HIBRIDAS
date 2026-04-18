describe('Pruebas E2E - Autenticación', () => {

  it('debe redirigir a la página de Login al pulsar el botón de Cerrar Sesión', () => {

    cy.visit('/tabs/products');

    cy.get('[data-cy="logout-btn"]').click();

    cy.url().should('include', '/login');

  });

});