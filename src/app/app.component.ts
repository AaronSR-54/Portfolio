import { Component, OnInit} from '@angular/core';
import * as Aos from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'Portafolio';
  
  public isMobile = false;

  ngOnInit(){
    this.isMobile = this.checkMobile();
    Aos.init()
  }

  public checkMobile(){   
    if(window.innerWidth < window.innerHeight){
      return true;
    } else {
      return false
    }
  }

}
