import { ClientsPage } from './clients.page';
import { IonicModule } from '@ionic/angular';
import { provideRouter } from '@angular/router';

describe('ClientsPage - Component Testing', () => {
  it('debería renderizar la lista completa de clientes', () => {
    cy.mount(ClientsPage, {
      imports: [IonicModule.forRoot()],
      providers: [provideRouter([])]
    });

    cy.get('ion-item').should('have.length', 3);

    cy.get('ion-item').first().within(() => {
      cy.get('ion-label h2').should('contain.text', 'Juan Pérez');
      cy.get('ion-avatar img').should('have.attr', 'src').and('include', 'avatar.svg');
    });
  });
});