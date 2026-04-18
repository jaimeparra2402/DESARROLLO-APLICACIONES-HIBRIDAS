import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePage]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should initialize the title from signal', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('ion-title')?.textContent).toBe('Home Page');
  });

  it('should update the word in the DOM when button clicked', () => {
    const button = fixture.debugElement.query(By.css('ion-button'));
    
    button.triggerEventHandler('click', null);
    
    fixture.detectChanges();

    expect(component.word()).not.toBe('initial word');
  });

  it('should update the title in the DOM when changeTitle is called', () => {
    component.changeTitle('Nuevo titulo');
    
    fixture.detectChanges();

    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('ion-title')?.textContent).toContain('Nuevo titulo');
  });
});