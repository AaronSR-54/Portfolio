import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  proSkills: string[] = [
    'Flexibilidad para el aprendizaje', 
    'Capacidad de adaptación', 
    'Resolución de conflictos', 
    'Creatividad e innovación', 
    'Comunicación'
  ]
  techSkills: string[] = [
    'Visual Studio Code',
    'Figma', 
    'GitHub', 
    'Adobe Photoshop',
  ]

  proSkillsOpened: boolean = false;
  techSkillsOpened: boolean = false;

  constructor() { 
  }

  ngOnInit(): void {
  }

  intercalateProSkills() {
    this.proSkillsOpened = !this.proSkillsOpened;
  }

  intercalateTechSkills() {
    this.techSkillsOpened = !this.techSkillsOpened;
  }
}
