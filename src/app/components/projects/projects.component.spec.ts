import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with projects signal', () => {
    const projects = component.projects();

    expect(projects.length).toBe(6);
    expect(projects[0].title).toBe('MATLAB Grader MCP Server');
  });

  it('should have projects with correct structure', () => {
    const projects = component.projects();
    const firstProject = projects[0];

    expect(firstProject.title).toBeDefined();
    expect(firstProject.description).toBeDefined();
    expect(firstProject.technologies).toBeDefined();
    expect(Array.isArray(firstProject.technologies)).toBe(true);
  });

  it('should render section title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const title = compiled.querySelector('.section-title');

    expect(title?.textContent).toBe('Featured Projects');
  });

  it('should render all project cards', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('.project-card');

    expect(cards.length).toBe(6);
  });

  it('should render project titles', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const titles = compiled.querySelectorAll('.project-title');

    expect(titles[0].textContent).toContain('MATLAB Grader MCP Server');
  });

  it('should render technology tags', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const techTags = compiled.querySelectorAll('.tech-tag');

    expect(techTags.length).toBeGreaterThan(0);
  });

  it('should render project descriptions', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const descriptions = compiled.querySelectorAll('.project-description');

    expect(descriptions.length).toBe(6);
  });
});
