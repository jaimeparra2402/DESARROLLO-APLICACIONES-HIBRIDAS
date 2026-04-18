import { TabsPage } from './tabs.page';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

describe('TabsPage (Cypress Component Testing)', () => {
  beforeEach(() => {
    cy.mount(TabsPage, {
      imports: [
        IonicModule.forRoot(),
        RouterModule.forRoot([])
      ],
    });
  });

  it('debería mostrar la pestaña Clientes con el texto e icono correctos', () => {
    cy.get('ion-tab-button[tab="clients"]').within(() => {
      cy.get('ion-label').should('have.text', 'Clientes');
      cy.get('ion-icon').should('have.attr', 'name', 'people-outline');
    });
  });

  it('debería mostrar la pestaña Reservas con el texto e icono correctos', () => {
    cy.get('ion-tab-button[tab="reservations"]').within(() => {
      cy.get('ion-label').should('have.text', 'Reservas');
      cy.get('ion-icon').should('have.attr', 'name', 'calendar-outline');
    });
  });

  it('debería mostrar la pestaña Productos con el texto e icono correctos', () => {
    cy.get('ion-tab-button[tab="products"]').within(() => {
      cy.get('ion-label').should('have.text', 'Productos');
      cy.get('ion-icon').should('have.attr', 'name', 'cart-outline');
    });
  });
});