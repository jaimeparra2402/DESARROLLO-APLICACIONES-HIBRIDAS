describe('Pruebas E2E - Creación de Reserva y Botón Atrás', () => {

  it('debe navegar a "Nueva Reserva" desde la lista y volver atrás', () => {
    cy.visit('/tabs/reservations');
    
    cy.get('ion-fab-button').click();
    
    cy.url().should('include', '/tabs/reservations/reserve');
    
    cy.get('ion-back-button').click();
    cy.url().should('include', '/tabs/reservations');
  });

  it('debe funcionar el botón atrás mediante defaultHref al acceder directamente a la URL de reserva', () => {
    cy.visit('/tabs/reservations/reserve');
    
    cy.get('ion-back-button')
      .should('be.visible')
      .click();
    
    cy.url().should('include', '/tabs/reservations');
  });

});