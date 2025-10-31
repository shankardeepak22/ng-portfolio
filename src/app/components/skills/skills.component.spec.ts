import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsComponent } from './skills.component';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with skill categories signal', () => {
    const categories = component.skillCategories();

    expect(categories.length).toBe(6);
    expect(categories[0].category).toBe('Backend & Languages');
  });

  it('should have skills with correct structure', () => {
    const categories = component.skillCategories();
    const firstCategory = categories[0];

    expect(firstCategory.skills.length).toBeGreaterThan(0);
    expect(firstCategory.skills[0].name).toBeDefined();
    expect(firstCategory.skills[0].level).toBeDefined();
  });

  it('should have skill levels between 0 and 100', () => {
    const categories = component.skillCategories();

    categories.forEach(category => {
      category.skills.forEach(skill => {
        expect(skill.level).toBeGreaterThanOrEqual(0);
        expect(skill.level).toBeLessThanOrEqual(100);
      });
    });
  });

  it('should render section title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const title = compiled.querySelector('.section-title');

    expect(title?.textContent).toBe('Skills & Expertise');
  });

  it('should render all skill categories', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const categories = compiled.querySelectorAll('.skill-category');

    expect(categories.length).toBe(6);
  });

  it('should render category titles', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const titles = compiled.querySelectorAll('.category-title');

    expect(titles[0].textContent).toContain('Backend & Languages');
  });

  it('should render skill bars', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const skillBars = compiled.querySelectorAll('.skill-bar');

    expect(skillBars.length).toBeGreaterThan(0);
  });

  it('should render skill names and percentages', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const skillNames = compiled.querySelectorAll('.skill-name');
    const percentages = compiled.querySelectorAll('.skill-percentage');

    expect(skillNames.length).toBeGreaterThan(0);
    expect(percentages.length).toBeGreaterThan(0);
  });
});
