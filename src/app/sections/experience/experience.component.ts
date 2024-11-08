import { Component, Input, OnInit } from '@angular/core';
import { Experience } from 'src/app/interfaces/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @Input() isMobile? : Boolean;

  experiences: Experience[] = [
    {
      company: 'Capgemini',
      period: 'Sept 2022 - Presente',
      details: ['Desarrollo Front-End', 'Diseño UI/UX'],
      technologies: ['Angular', 'HTML', 'CSS', 'TypeScript', 'Figma']
    },
    {
      company: 'Capgemini',
      period: 'Feb 2022 - Sept 2022',
      details: ['Desarrollo Front-End', 'Estudiante de prácticas'],
      technologies: ['Angular', 'HTML', 'CSS', 'TypeScript']
    },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
