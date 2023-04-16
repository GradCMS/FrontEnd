import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  activeTab:string = 'Background';
  selectedFontFamily: string = 'Arial';
  selectedColor: string = '#000000';
  selectedFontStyle: string = 'normal';
  selectedDecorationStyle: string = 'none';
  selectedFontSize: number = 12;
  selectedTextAlign: string = 'left';
  selectedBorderType: string = 'None';
  selectedBorderStyle: string = 'Solid';
  selectedBorderWidth: number = 0;
  selectedBorderColor: string = '#000000';
  selectedRadiusType: string = 'None';
  selectedSameRadius: number = 0;
  selectedBottomLeftRadius: number = 0;
  selectedTopLeftRadius: number = 0;
  selectedTopRightRadius: number = 0;
  selectedBottomRightRadius: number = 0;
  // outliers
  selectedOutlineStyle: string = 'Solid';
  selectedOutlineWidth: number = 0;
  selectedOutlineColor: string = '#000000';
  // end of outliers
  onTabClick(tab: string){
    this.activeTab = tab;
  }
  constructor() { }

  ngOnInit(): void {

  }

  addCustomCss() {

  }

  removeCustomCss() {

  }
}
