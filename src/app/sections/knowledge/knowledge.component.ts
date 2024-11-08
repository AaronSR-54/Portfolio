import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss']
})
export class KnowledgeComponent implements OnInit {
  @Input() isMobile? : Boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

}
