import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @Input() isMobile? : Boolean;

  public step = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addStep(){
    this.step++;
  }

  substractStep(){
    this.step--;
  }
}
