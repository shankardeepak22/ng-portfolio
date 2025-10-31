import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienceComponent } from './experience.component';

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with experiences signal', () => {
    const experiences = component.experiences();
    
    expect(experiences.length).toBe(3);
    expect(experiences[0].company).toBe('MathWorks');
  });

  it('should have MathWorks with 2 positions', () => {
    const mathworks = component.experiences()[0];
    
    expect(mathworks.positions.length).toBe(2);
    expect(mathworks.positions[0].title).toBe('Senior Software Engineer');
    expect(mathworks.positions[1].title).toBe('Software Engineer II');
  });

  it('should render section title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const title = compiled.querySelector('.section-title');
    
    expect(title?.textContent).toBe('Experience');
  });

  it('should render all experience cards', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('.experience-card');
    
    expect(cards.length).toBe(3);
  });

  it('should render company headers', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const companies = compiled.querySelectorAll('.company');
    
    expect(companies[0].textContent).toBe('MathWorks');
    expect(companies[1].textContent).toBe('Mindex Technologies');
    expect(companies[2].textContent).toBe('Thomson Reuters');
  });

  it('should render position titles', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const positions = compiled.querySelectorAll('.position-title');
    
    expect(positions.length).toBeGreaterThan(0);
    expect(positions[0].textContent).toContain('Senior Software Engineer');
  });

  it('should render descriptions', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const descriptions = compiled.querySelectorAll('.description li');
    
    expect(descriptions.length).toBeGreaterThan(0);
  });
});
