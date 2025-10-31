import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

interface Position {
  title: string;
  period: string;
  description: string[];
}

interface Experience {
  company: string;
  location: string;
  totalPeriod: string;
  positions: Position[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent {
  public readonly experiences = signal<Experience[]>([
    {
      company: 'MathWorks',
      location: 'Natick, MA',
      totalPeriod: 'March 2020 - Present',
      positions: [
        {
          title: 'Senior Software Engineer',
          period: 'May 2025 - Present',
          description: [
            'Developed MCP Server to integrate with MATLAB Copilot for performing MATLAB Grader actions',
            'Pioneered API gateway development routing MATLAB Online requests to Grader microservices with load balancers & circuit-breakers, achieving 99.95% system availability',
            'Drove implementation of request validation using server-to-server auth with PASETO for secure communication',
            'Spearheaded In Product experience initiative, deploying robust system handling 20% growth in user flow'
          ]
        },
        {
          title: 'Software Engineer II',
          period: 'March 2020 - April 2025',
          description: [
            'Led architecture and development of MATLAB Assessment Manager web application using Java, Spring Boot and Hibernate, achieving 35% reduction in database duplications',
            'Enhanced accessibility of Problem Collection interface, resulting in 15% increased engagement from users with disability',
            'Re-architected monolithic Learning Tool Service as microservices using Java and Spring Boot, increasing system performance by 60%',
            'Enabled faster solution scoring with batch processing, reducing cost of MATLAB source file compilation'
          ]
        }
      ]
    },
    {
      company: 'Mindex Technologies',
      location: 'Rochester, NY',
      totalPeriod: 'April 2018 - February 2020',
      positions: [
        {
          title: 'Software Engineer',
          period: 'April 2018 - February 2020',
          description: [
            'Enhanced Paychex payroll system with approval feature for secure direct deposit transactions using Java and Spring Boot',
            'Designed notification workflow with Apache FreeMarker to trigger notifications based on user preferences',
            'Drove development of e-signature application using Spring Boot WebFlux, configured with Jenkins CI/CD pipeline',
            'Orchestrated migration from MySQL to MongoDB, optimizing schema management'
          ]
        }
      ]
    },
    {
      company: 'Thomson Reuters',
      location: 'Bangalore, India',
      totalPeriod: 'August 2013 - April 2015',
      positions: [
        {
          title: 'Associate Software Engineer',
          period: 'August 2013 - April 2015',
          description: [
            'Developed and integrated online index tool for Westlaw using Java and Spring framework',
            'Utilized Hibernate ORM for efficient data persistence and management',
            'Collaborated with cross-functional teams to deliver enterprise-level solutions'
          ]
        }
      ]
    }
  ]);
}
