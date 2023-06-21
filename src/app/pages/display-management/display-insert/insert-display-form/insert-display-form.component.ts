import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Display } from 'src/app/models/Display';
import { GridSetting } from 'src/app/models/GridSetting';
import { SliderSetting } from 'src/app/models/SliderSetting';
import { DisplayService } from 'src/app/sharedServices/DisplayData/display.service';
import { CssClassService } from 'src/app/sharedServices/classData/css-class.service';
@Component({
  selector: 'app-insert-display-form',
  templateUrl: './insert-display-form.component.html',
  styleUrls: ['./insert-display-form.component.css']
})
export class InsertDisplayFormComponent implements OnInit {
  cssclasses: any;
  isSliderChecked: boolean = false
  isGridChecked: boolean = false
  newDisplay: Display = new Display
  num!: number
  str!: string
  arrowAndBullet!: string
  slider: SliderSetting = {
    slides_per_row: this.num,
    slides_per_column: this.num,
    total_slides: this.num,
    slides_spacing: this.num,
    center_slides: 0,
    loop_slides: 0,
    auto_height: 0,
    stretch_height: 0,
    auto_play: 0,
    arrows: 0,
    bullets: 0,
    class_id: this.num,
    animation: this.str,
    effect_speed_ms: 0
  }
  grid: GridSetting = {
    blocks_count: this.num,
    blocks_per_row: this.num,
    blocks_spacing: this.num,
    class_id: this.num,
    blocks_animation: this.str,
    horizontal_alignment: this.str,
    vertical_alignment: this.str
  };
  constructor(private cssServ: CssClassService, private displayserv: DisplayService,private route :Router) { }

  ngOnInit(): void {
    this.cssServ.getCssClass().subscribe(data => {
      this.cssclasses = data
    })

  }



  increment(): void {
    if (this.slider.effect_speed_ms < 100) {
      this.slider.effect_speed_ms++;
    }
  }

  decrement(): void {
    if (this.slider.effect_speed_ms > 0) {
      this.slider.effect_speed_ms--;
    }
  }

  insertNewDisplay() {
    this.newDisplay.display_template='Template 1'
    // operation on SLider Attributes
    if (this.isSliderChecked) {
      if (this.arrowAndBullet === "Arrow") {
        this.slider.arrows=1
        this.slider.bullets=0
      }
      else if (this.arrowAndBullet === "Bullet") {
        this.slider.arrows=0
        this.slider.bullets=1
      }
     if(this.slider.center_slides){
      this.slider.center_slides=1
     }else{
      this.slider.center_slides=0
     }
     if(this.slider.loop_slides){
      this.slider.loop_slides=1
     }else{
      this.slider.loop_slides=0
     }
     if(this.slider.auto_height){
      this.slider.auto_height=1
     }else{
      this.slider.auto_height=0
     }
     if(this.slider.stretch_height){
      this.slider.stretch_height=1
     }else{
      this.slider.stretch_height=0
     }
     if(this.slider.auto_play){
      this.slider.auto_play=1
     }else{
      this.slider.auto_play=0
     }
    this.newDisplay.slider_setting=this.slider
   
    }else if (this.isGridChecked){
        
      this.newDisplay.grid_setting=this.grid



    }
   


    this.displayserv.addDisplay(this.newDisplay).subscribe(data=>{
      this.route.navigateByUrl('DisplayManagement')
    })
  }





  //  set what is checked of slider and grid 
  checkStatus(event: any) {

    if (event.target.checked == true) {
      let radioValue = event.target.value;
      if (radioValue == "grid") {
        this.isSliderChecked = false
        this.isGridChecked = true
      } else if (radioValue == "slider") {
        this.isSliderChecked = true
        this.isGridChecked = false
      }
    }

  }
}
