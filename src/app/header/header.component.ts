import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isMobile? : Boolean;
 
  public sections = [
    {
      id: 0,
      name: 'Sobre mí',
      link: 'home',
      active: true
    },
    {
      id: 1,
      name: 'Experiencia',
      link: 'experience',
      active: false
    },
    {
      id: 2,
      name: 'Habilidades',
      link: 'skills',
      active: false
    },
    {
      id: 3,
      name: 'Proyectos',
      link: 'projects',
      active: false
    }
  ]

  public menuOpened = false;

  constructor() { }

  ngOnInit(): void {
  }

  public openMenu(){
    this.menuOpened = true;
  }

  public closeMenu(){
    this.menuOpened = false;
  }
}
