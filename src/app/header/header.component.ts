import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 show1: boolean;
 show2: boolean;
 show3: boolean;

  constructor(){
    this.show1=false;
    this.show2=false;
    this.show3=false;
  }
}