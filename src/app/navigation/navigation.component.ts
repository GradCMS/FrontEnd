import { Component } from '@angular/core';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],

})
export class NavigationComponent {
  showMenu1: boolean;
  showMenu2: boolean;
  showMenu3: boolean;
  showMenu4: boolean;
  showMenu5: boolean;

  
 
  constructor(){
    this.showMenu1=false;
    this.showMenu2=false;
    this.showMenu3=false;    
    this.showMenu4=false;
    this.showMenu5=false;
  
  }
  

}

