import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {

  constructor() { }

  techOpened: boolean = false;

  ngOnInit(): void {
  }

  openTech(){
    this.techOpened = true;
  }

  closeTech(){
    this.techOpened = false;
  }
}
