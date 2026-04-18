import { ProductsPage } from './products.page';
import { IonicModule } from '@ionic/angular';

describe('ProductsPage - Component Testing', () => {
  it('debería mostrar los productos con sus precios y stock', () => {
    cy.mount(ProductsPage, {
      imports: [IonicModule.forRoot()],
    });

    cy.get('ion-item').should('have.length', 3);

    cy.contains('Producto C')
      .parents('ion-item')
      .within(() => {
        cy.get('ion-label').should('contain.text', '40');
      });
  });

  it('el botón de logout debe estar presente', () => {
    cy.mount(ProductsPage, {
      imports: [IonicModule.forRoot()],
    });
    cy.get('[data-cy="logout-btn"]').should('exist');
  });
});
