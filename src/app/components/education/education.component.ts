import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period?: string;
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EducationComponent {
  public readonly educationList = signal<Education[]>([
    {
      degree: 'Master of Science (M.S)',
      field: 'Computer Science',
      institution: 'Rochester Institute of Technology',
      location: 'Rochester, NY, USA',
      period: '2015 - 2018'
    },
    {
      degree: 'Bachelor of Engineering (B.E)',
      field: 'Computer Science',
      institution: 'Dr. Ambedkar Institute of Technology',
      location: 'Bengaluru, KA, India',
      period: '2009 - 2013'
    }
  ]);
}
