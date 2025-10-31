import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EducationComponent } from './education.component';

describe('EducationComponent', () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(EducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with education list signal', () => {
    const educationList = component.educationList();
    
    expect(educationList.length).toBe(2);
    expect(educationList[0].institution).toBe('Rochester Institute of Technology');
    expect(educationList[1].institution).toBe('Dr. Ambedkar Institute of Technology');
  });

  it('should have correct degree information', () => {
    const educationList = component.educationList();
    
    expect(educationList[0].degree).toBe('Master of Science (M.S)');
    expect(educationList[0].field).toBe('Computer Science');
    expect(educationList[1].degree).toBe('Bachelor of Engineering (B.E)');
  });

  it('should render section title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const title = compiled.querySelector('.section-title');
    
    expect(title?.textContent).toBe('Education');
  });

  it('should render all education cards', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('.education-card');
    
    expect(cards.length).toBe(2);
  });

  it('should render degree icons', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const icons = compiled.querySelectorAll('.degree-icon');
    
    expect(icons.length).toBe(2);
    expect(icons[0].textContent).toBe('🎓');
  });

  it('should render institution names', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const institutions = compiled.querySelectorAll('.institution');
    
    expect(institutions[0].textContent).toContain('Rochester Institute of Technology');
  });
});
