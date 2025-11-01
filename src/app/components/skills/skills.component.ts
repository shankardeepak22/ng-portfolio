import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
  public readonly skillCategories = signal<SkillCategory[]>([
    {
      category: 'Languages & Backend',
      icon: '⚙️',
      skills: ['Java', 'Spring Boot', 'Node.js', 'TypeScript', 'Python', 'JavaScript']
    },
    {
      category: 'Frontend & UI',
      icon: '🎨',
      skills: ['Angular', 'React', 'Vue.js', 'HTML/CSS', 'Responsive Design']
    },
    {
      category: 'Databases',
      icon: '💾',
      skills: ['MySQL', 'MariaDB', 'MongoDB', 'Redis', 'Hibernate']
    },
    {
      category: 'Cloud & DevOps',
      icon: '☁️',
      skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'CI/CD']
    },
    {
      category: 'Architecture & Patterns',
      icon: '🏗️',
      skills: ['Microservices', 'REST APIs', 'Event-Driven', 'Load Balancing', 'Circuit Breakers']
    },
    {
      category: 'Messaging & Streaming',
      icon: '📡',
      skills: ['Apache Kafka', 'RabbitMQ', 'WebFlux', 'Reactive Programming']
    },
    {
      category: 'Security',
      icon: '🔐',
      skills: ['OAuth 2.0', 'JWT', 'PASETO', 'SAST', 'DAST']
    },
    {
      category: 'AI & Emerging Tech',
      icon: '🤖',
      skills: ['GenAI', 'MCP', 'RAG', 'Prompt Engineering', 'AI Agents']
    },
    {
      category: 'Testing',
      icon: '🧪',
      skills: ['JUnit', 'Jest', 'Playwright', 'Gatling', 'SonarQube']
    }
  ]);
}
