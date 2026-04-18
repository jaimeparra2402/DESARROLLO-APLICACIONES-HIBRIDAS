import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsPage } from './products.page';
import { By } from '@angular/platform-browser';

describe('ProductsPage (Jasmine List Test)', () => {
  let component: ProductsPage;
  let fixture: ComponentFixture<ProductsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería renderizar la lista de productos con sus nombres', () => {
    const items = fixture.debugElement.queryAll(By.css('ion-item'));
    (window as any).expect(items.length).toBe(3);

    const content = items[0].nativeElement.textContent;
    (window as any).expect(content).toContain('Producto A');
    (window as any).expect(content).toContain('25');
  });
});
