import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
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
      category: 'Backend & Languages',
      skills: [
        { name: 'Java', level: 95 },
        { name: 'Spring Boot', level: 95 },
        { name: 'Node.js', level: 90 },
        { name: 'TypeScript', level: 90 },
        { name: 'Python', level: 80 }
      ]
    },
    {
      category: 'Frontend & Frameworks',
      skills: [
        { name: 'Angular', level: 90 },
        { name: 'React', level: 85 },
        { name: 'Vue', level: 80 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML/CSS', level: 85 }
      ]
    },
    {
      category: 'AI & Advanced Tooling',
      skills: [
        { name: 'GenAI', level: 85 },
        { name: 'MCP', level: 90 },
        { name: 'RAG', level: 80 },
        { name: 'Prompt Engineering', level: 85 },
        { name: 'Agentic Coding', level: 80 }
      ]
    },
    {
      category: 'Data & Messaging',
      skills: [
        { name: 'MySQL/MariaDB', level: 90 },
        { name: 'MongoDB', level: 90 },
        { name: 'Apache Kafka', level: 85 },
        { name: 'Redis', level: 80 },
        { name: 'RabbitMQ', level: 80 }
      ]
    },
    {
      category: 'Security & DevOps',
      skills: [
        { name: 'OAuth/JWT/PASETO', level: 90 },
        { name: 'Docker/Kubernetes', level: 85 },
        { name: 'AWS', level: 85 },
        { name: 'Jenkins/GitHub Actions', level: 90 },
        { name: 'SAST/DAST', level: 80 }
      ]
    },
    {
      category: 'Testing & Quality',
      skills: [
        { name: 'JUnit', level: 90 },
        { name: 'Jest', level: 85 },
        { name: 'Playwright', level: 80 },
        { name: 'Gatling', level: 80 },
        { name: 'SonarQube', level: 85 }
      ]
    }
  ]);
}
