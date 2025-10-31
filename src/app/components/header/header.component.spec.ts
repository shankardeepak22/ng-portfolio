import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with menu closed', () => {
    expect(component.isMenuOpen()).toBe(false);
  });

  it('should toggle menu when toggleMenu is called', () => {
    expect(component.isMenuOpen()).toBe(false);

    component.toggleMenu();
    expect(component.isMenuOpen()).toBe(true);

    component.toggleMenu();
    expect(component.isMenuOpen()).toBe(false);
  });

  it('should scroll to section when scrollToSection is called', () => {
    const mockElement = document.createElement('div');
    mockElement.id = 'test-section';
    mockElement.scrollIntoView = jest.fn();
    document.body.appendChild(mockElement);

    const scrollIntoViewSpy = jest.spyOn(mockElement, 'scrollIntoView');

    component.scrollToSection('test-section');

    expect(scrollIntoViewSpy).toHaveBeenCalledWith({ behavior: 'smooth' });

    document.body.removeChild(mockElement);
  });

  it('should close menu when scrolling to section', () => {
  const mockElement = document.createElement('div');
  mockElement.id = 'test-section';
  mockElement.scrollIntoView = jest.fn();
  document.body.appendChild(mockElement);

  component.isMenuOpen.set(true);
  component.scrollToSection('test-section');

  expect(component.isMenuOpen()).toBe(false);

    document.body.removeChild(mockElement);
  });

  it('should not scroll if element does not exist', () => {
    component.scrollToSection('non-existent-section');
    expect(component.isMenuOpen()).toBe(false);
  });

  it('should render navigation links', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const navButtons = compiled.querySelectorAll('nav button');

    expect(navButtons.length).toBe(7);
    expect(navButtons[0].textContent).toContain('Home');
    expect(navButtons[1].textContent).toContain('About');
    expect(navButtons[2].textContent).toContain('Experience');
  });

  it('should render logo', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const logo = compiled.querySelector('.logo h2');

    expect(logo?.textContent).toBe('DS');
  });

  it('should render menu toggle button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const menuToggle = compiled.querySelector('.menu-toggle');

    expect(menuToggle).toBeTruthy();
  });
});
