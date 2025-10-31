import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroComponent } from './hero.component';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should scroll to contact section when scrollToContact is called', () => {
    const mockElement = document.createElement('div');
    mockElement.id = 'contact';
    mockElement.scrollIntoView = jest.fn();
    document.body.appendChild(mockElement);

    const scrollIntoViewSpy = jest.spyOn(mockElement, 'scrollIntoView');

    component.scrollToContact();

    expect(scrollIntoViewSpy).toHaveBeenCalledWith({ behavior: 'smooth' });

    document.body.removeChild(mockElement);
  });

  it('should not scroll if contact element does not exist', () => {
    component.scrollToContact();
    expect(component).toBeTruthy();
  });

  it('should render name', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const name = compiled.querySelector('.name');

    expect(name?.textContent).toContain('Deepak Shankar');
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const title = compiled.querySelector('.title');

    expect(title?.textContent).toContain('Senior Software Engineer');
  });

  it('should render description', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const description = compiled.querySelector('.description');

    expect(description?.textContent).toContain('Full Stack Software Engineer');
  });

  it('should render CTA buttons', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const buttons = compiled.querySelectorAll('.btn');

    expect(buttons.length).toBe(2);
    expect(buttons[0].textContent).toContain('Get In Touch');
    expect(buttons[1].textContent).toContain('View My Work');
  });
});
