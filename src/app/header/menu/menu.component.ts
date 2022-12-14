import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() sections: any;
  @Output() menuOpened = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  closeMenu(){
    this.menuOpened.emit(false)
  }

}
