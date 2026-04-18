import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ReservationsPage } from './reservations.page';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';

describe('ReservationsPage (Listado - Jasmine)', () => {
  let component: ReservationsPage;
  let fixture: ComponentFixture<ReservationsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationsPage, IonicModule.forRoot(), RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ReservationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse el componente', () => {
    (window as any).expect(component).toBeTruthy();
  });

  it('debería mostrar la lista de reservas correctamente', () => {
    component.reservations = [
      { id: 1, title: 'Reserva Test 1', date: '15/03/2026', time: '21:00' },
      { id: 2, title: 'Reserva Test 2', date: '16/03/2026', time: '14:00' },
    ];

    fixture.detectChanges();

    const items = fixture.debugElement.queryAll(By.css('ion-item'));

    (window as any).expect(items.length).toBe(2);
    (window as any)
      .expect(items[0].nativeElement.textContent)
      .toContain('Reserva Test 1');
  });

  it('debería tener el botón FAB para añadir nueva reserva', () => {
    const fabBtn = fixture.debugElement.query(By.css('ion-fab-button'));

    (window as any).expect(fabBtn).toBeTruthy();
  });
});
