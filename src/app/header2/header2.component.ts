import { Component, OnInit } from '@angular/core';
/*declare function showNavMenu():void;
declare function hideNavMenu():void;
declare function showDropdown():void;
declare function hideDropdown():void;
declare function dropdownClick():void;*/


@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit {
show1:boolean;
show2:boolean;
show3:boolean;
show4:boolean;
show5:boolean;
show6:boolean;
show7:boolean;
  constructor() { 
    /*showNavMenu();
    hideNavMenu();
    showDropdown();
    hideDropdown();
    dropdownClick();*/
    this.show1=false;
    this.show2=false;
    this.show3=false;
    this.show4=false;
    this.show5=false;
    this.show6=false;
    this.show7=false;
  }

 

  ngOnInit(): void {
  }

}
