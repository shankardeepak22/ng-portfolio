import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent, ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with empty values', () => {
    expect(component.contactForm.get('name')?.value).toBe('');
    expect(component.contactForm.get('email')?.value).toBe('');
    expect(component.contactForm.get('subject')?.value).toBe('');
    expect(component.contactForm.get('message')?.value).toBe('');
  });

  it('should initialize submit status as idle', () => {
    expect(component.submitStatus()).toBe('idle');
  });

  it('should validate name field as required', () => {
    const nameControl = component.contactForm.get('name');
    
    expect(nameControl?.hasError('required')).toBe(true);
    
    nameControl?.setValue('J');
    expect(nameControl?.hasError('minlength')).toBe(true);
    
    nameControl?.setValue('John');
    expect(nameControl?.valid).toBe(true);
  });

  it('should validate email field', () => {
    const emailControl = component.contactForm.get('email');
    
    expect(emailControl?.hasError('required')).toBe(true);
    
    emailControl?.setValue('invalid-email');
    expect(emailControl?.hasError('email')).toBe(true);
    
    emailControl?.setValue('test@example.com');
    expect(emailControl?.valid).toBe(true);
  });

  it('should validate subject field', () => {
    const subjectControl = component.contactForm.get('subject');
    
    expect(subjectControl?.hasError('required')).toBe(true);
    
    subjectControl?.setValue('Hi');
    expect(subjectControl?.hasError('minlength')).toBe(true);
    
    subjectControl?.setValue('Subject');
    expect(subjectControl?.valid).toBe(true);
  });

  it('should validate message field', () => {
    const messageControl = component.contactForm.get('message');
    
    expect(messageControl?.hasError('required')).toBe(true);
    
    messageControl?.setValue('Short');
    expect(messageControl?.hasError('minlength')).toBe(true);
    
    messageControl?.setValue('This is a long enough message for testing');
    expect(messageControl?.valid).toBe(true);
  });

  it('should not submit invalid form', () => {
    component.onSubmit();
    
    expect(component.submitStatus()).toBe('idle');
    expect(component.contactForm.value.name).toBe('');
  });

  it('should submit valid form', () => {
    component.contactForm.setValue({
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Test Subject',
      message: 'This is a test message'
    });
    
    component.onSubmit();
    
    expect(component.submitStatus()).toBe('success');
    expect(component.contactForm.get('name')?.value).toBe(null);
  });

  it('should reset submit status after 5 seconds', fakeAsync(() => {
    component.contactForm.setValue({
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Test Subject',
      message: 'This is a test message'
    });
    
    component.onSubmit();
    expect(component.submitStatus()).toBe('success');
    
    tick(5000);
    
    expect(component.submitStatus()).toBe('idle');
  }));

  it('should render section title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const title = compiled.querySelector('.section-title');
    
    expect(title?.textContent).toBe('Get In Touch');
  });

  it('should render contact form', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const form = compiled.querySelector('form');
    
    expect(form).toBeTruthy();
  });

  it('should render all form fields', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const nameInput = compiled.querySelector('#name');
    const emailInput = compiled.querySelector('#email');
    const subjectInput = compiled.querySelector('#subject');
    const messageInput = compiled.querySelector('#message');
    
    expect(nameInput).toBeTruthy();
    expect(emailInput).toBeTruthy();
    expect(subjectInput).toBeTruthy();
    expect(messageInput).toBeTruthy();
  });

  it('should render submit button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const submitButton = compiled.querySelector('.submit-btn');
    
    expect(submitButton?.textContent).toContain('Send Message');
  });

  it('should disable submit button when form is invalid', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const submitButton = compiled.querySelector('.submit-btn') as HTMLButtonElement;
    
    expect(submitButton.disabled).toBe(true);
  });

  it('should render contact info items', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const infoItems = compiled.querySelectorAll('.info-item');
    
    expect(infoItems.length).toBe(4);
  });
});
