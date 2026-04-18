import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReservePage } from './reserve.page';

describe('ReservePage', () => {
  let component: ReservePage;
  let fixture: ComponentFixture<ReservePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservePage, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ReservePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    (window as any).expect(component).toBeTruthy();
  });
});
