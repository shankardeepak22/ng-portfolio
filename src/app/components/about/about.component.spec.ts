import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render section title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const title = compiled.querySelector('.section-title');
    
    expect(title?.textContent).toBe('About Me');
  });

  it('should render about text paragraphs', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const paragraphs = compiled.querySelectorAll('.text p');
    
    expect(paragraphs.length).toBe(3);
    expect(paragraphs[0].textContent).toContain('Senior Software Engineer at MathWorks');
  });

  it('should render highlight cards', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('.highlight-card');
    
    expect(cards.length).toBe(3);
  });

  it('should render years of experience', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('.highlight-card h3');
    
    expect(cards[0].textContent).toBe('7+');
  });
});
