import { ReservationsPage } from './reservations.page';
import { IonicModule } from '@ionic/angular';

describe('ReservationsPage - Component Testing', () => {
  it('debería mostrar las reservas y el botón de añadir', () => {
    cy.mount(ReservationsPage, {
      imports: [IonicModule.forRoot()],
    });

    cy.get('ion-item').should('have.length', 3);

    cy.contains('Reserva 2')
      .parents('ion-item')
      .within(() => {
        cy.get('ion-label').should('contain.text', '16/03/2026');
      });
  });
});
