import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { provideRouter } from '@angular/router'; // Mejor usar provideRouter para Standalone
import { TabsPage } from './tabs.page';
import { By } from '@angular/platform-browser';

describe('TabsPage (Unit Tests con Jasmine)', () => {
  let component: TabsPage;
  let fixture: ComponentFixture<TabsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ 
        TabsPage, 
        IonicModule.forRoot() 
      ],
      providers: [
        provideRouter([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('debería crearse el componente de pestañas', () => {
    expect(component).toBeTruthy();
  });

  it('la pestaña "Clientes" debería tener el texto "Clientes" y el icono "people-outline"', () => {
    const tabButton = fixture.debugElement.query(By.css('ion-tab-button[tab="clients"]'));
    const label = tabButton.query(By.css('ion-label')).nativeElement;
    const icon = tabButton.query(By.css('ion-icon')).nativeElement;

    expect(label.textContent.trim()).toBe('Clientes');
    expect(icon.getAttribute('name')).toBe('people-outline');
  });

  it('la pestaña "Reservas" debería tener el texto "Reservas" y el icono "calendar-outline"', () => {
    const tabButton = fixture.debugElement.query(By.css('ion-tab-button[tab="reservations"]'));
    const label = tabButton.query(By.css('ion-label')).nativeElement;
    const icon = tabButton.query(By.css('ion-icon')).nativeElement;

    expect(label.textContent.trim()).toBe('Reservas');
    expect(icon.getAttribute('name')).toBe('calendar-outline');
  });

  it('la pestaña "Productos" debería tener el texto "Productos" y el icono "cart-outline"', () => {
    const tabButton = fixture.debugElement.query(By.css('ion-tab-button[tab="products"]'));
    const label = tabButton.query(By.css('ion-label')).nativeElement;
    const icon = tabButton.query(By.css('ion-icon')).nativeElement;

    expect(label.textContent.trim()).toBe('Productos');
    expect(icon.getAttribute('name')).toBe('cart-outline');
  });
});