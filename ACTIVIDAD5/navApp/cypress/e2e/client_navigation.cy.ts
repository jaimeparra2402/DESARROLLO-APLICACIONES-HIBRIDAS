describe('Pruebas E2E - Navegación y Botón Atrás', () => {
  it('debe mostrar el ID del cliente correctamente en la página de detalle', () => {
    cy.visit('/tabs/clients');
    cy.get('ion-item').first().click();

    cy.get('ion-title').should('contain.text', '1');
    cy.url().should('include', '/tabs/clients/1');
  });

  it('debe volver a la lista de clientes desde el detalle (Navegación normal)', () => {
    cy.visit('/tabs/clients');
    cy.get('ion-item').first().click();

    cy.get('ion-back-button').click();

    cy.url().should('include', '/tabs/clients');
  });

  it('debe funcionar el botón atrás mediante defaultHref al acceder directamente', () => {
    cy.visit('/tabs/clients/1');

    cy.get('ion-back-button').should('be.visible').click();

    cy.url().should('include', '/tabs/clients');
  });
});
