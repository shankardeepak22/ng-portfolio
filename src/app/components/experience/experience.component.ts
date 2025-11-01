import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

interface Project {
  title: string;
  description: string;
  technologies: string[];
}

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
  projects?: Project[];
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
      ],
      projects: [
        {
          title: 'MATLAB Grader MCP Server',
          description: 'Developed innovative MCP Server integration with MATLAB Copilot to perform MATLAB Grader actions, enabling seamless AI-powered educational workflows.',
          technologies: ['MCP', 'MATLAB', 'GenAI', 'Node.js']
        },
        {
          title: 'API Gateway for MATLAB Online',
          description: 'Pioneered API gateway development routing MATLAB Online requests to Grader microservices with load balancers and circuit-breakers, achieving 99.95% system availability.',
          technologies: ['Java', 'Spring Boot', 'Microservices', 'Load Balancing', 'Circuit Breakers']
        },
        {
          title: 'MATLAB Assessment Manager',
          description: 'Led architecture and development of instructor-focused web application for managing and sharing curated problems, achieving 35% reduction in database duplications.',
          technologies: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'Angular']
        },
        {
          title: 'Learning Tool Service Microservices',
          description: 'Re-architected monolithic application as microservices using Java and Spring Boot, increasing system performance by 60% with batch processing for solution scoring.',
          technologies: ['Java', 'Spring Boot', 'Microservices', 'Batch Processing']
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
      ],
      projects: [
        {
          title: 'Paychex Approvals System',
          description: 'Enhanced payroll system with approval feature for secure direct deposit transactions and notification workflow using Apache FreeMarker.',
          technologies: ['Java', 'Spring Boot', 'Apache FreeMarker', 'MySQL']
        },
        {
          title: 'E-Signature Application',
          description: 'Built reactive e-signature application using Spring Boot WebFlux for user consent management, integrated with Jenkins CI/CD pipeline.',
          technologies: ['Spring Boot WebFlux', 'MongoDB', 'Jenkins', 'Reactive Programming']
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
      ],
      projects: [
        {
          title: 'Westlaw Index Management Tool',
          description: 'Developed and integrated online index management tool for Westlaw legal research platform using Java and Spring framework with Hibernate ORM for data persistence.',
          technologies: ['Java', 'Spring Framework', 'Hibernate', 'MySQL']
        }
      ]
    }
  ]);
}
