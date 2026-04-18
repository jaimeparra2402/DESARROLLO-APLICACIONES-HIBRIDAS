import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientsPage } from './clients.page';
import { provideRouter } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('ClientsPage (Jasmine List Test)', () => {
  let component: ClientsPage;
  let fixture: ComponentFixture<ClientsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientsPage], 
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería mostrar 3 clientes en el listado', () => {
    const items = fixture.debugElement.queryAll(By.css('ion-item'));
    (window as any).expect(items.length).toBe(3);
    
    const firstClientName = items[0].query(By.css('ion-label h2')).nativeElement.textContent;
    (window as any).expect(firstClientName).toContain('Juan Pérez');
  });
});