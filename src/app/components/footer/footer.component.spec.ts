import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have current year', () => {
    const currentYear = new Date().getFullYear();
    expect(component.currentYear).toBe(currentYear);
  });

  it('should render current year in copyright', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const copyright = compiled.querySelector('.footer-bottom p');
    const currentYear = new Date().getFullYear();
    
    expect(copyright?.textContent).toContain(currentYear.toString());
  });

  it('should render footer sections', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const sections = compiled.querySelectorAll('.footer-section');
    
    expect(sections.length).toBe(3);
  });

  it('should render name in first section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const name = compiled.querySelector('.footer-section h3');
    
    expect(name?.textContent).toContain('Deepak Shankar');
  });

  it('should render Quick Links section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const quickLinks = Array.from(compiled.querySelectorAll('.footer-section h4'))
      .find(h4 => h4.textContent === 'Quick Links');
    
    expect(quickLinks).toBeTruthy();
  });

  it('should render Connect section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const connect = Array.from(compiled.querySelectorAll('.footer-section h4'))
      .find(h4 => h4.textContent === 'Connect');
    
    expect(connect).toBeTruthy();
  });

  it('should render navigation links', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('.footer-section ul li a');
    
    expect(links.length).toBeGreaterThan(0);
  });

  it('should have external links with target blank', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const externalLinks = compiled.querySelectorAll('a[target="_blank"]');
    
    expect(externalLinks.length).toBeGreaterThan(0);
  });

  it('should have external links with rel noopener', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const externalLinks = compiled.querySelectorAll('a[rel="noopener"]');
    
    expect(externalLinks.length).toBeGreaterThan(0);
  });
});
