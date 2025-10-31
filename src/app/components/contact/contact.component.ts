import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  public readonly contactForm: FormGroup;
  public readonly submitStatus = signal<'idle' | 'success' | 'error' | 'loading'>('idle');

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.submitStatus.set('loading');

      const formData = this.contactForm.value;

      this.http.post(environment.cloudFunctionUrl, formData).subscribe({
        next: () => {
          this.submitStatus.set('success');
          this.contactForm.reset();
          setTimeout(() => this.submitStatus.set('idle'), 5000);
        },
        error: (error) => {
          console.error('Error sending email:', error);
          this.submitStatus.set('error');
          setTimeout(() => this.submitStatus.set('idle'), 5000);
        }
      });
    }
  }
}
