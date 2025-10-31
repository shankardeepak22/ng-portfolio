import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  public readonly projects = signal<Project[]>([
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
    },
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
  ]);
}
