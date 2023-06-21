import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Display } from 'src/app/models/Display';
import { GridSetting } from 'src/app/models/GridSetting';
import { SliderSetting } from 'src/app/models/SliderSetting';
import { DisplayService } from 'src/app/sharedServices/DisplayData/display.service';
import { CssClassService } from 'src/app/sharedServices/classData/css-class.service';

@Component({
  selector: 'app-edit-display-form',
  templateUrl: './edit-display-form.component.html',
  styleUrls: ['./edit-display-form.component.css']
})
export class EditDisplayFormComponent implements OnInit {
  displayID!: number
  cssclasses: any;
  isSliderChecked: boolean = false
  isGridChecked: boolean = false
  display: Display = new Display
  newUpdate: Display = new Display()
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
  constructor(private cssServ: CssClassService, private displayserv: DisplayService, private route: Router, private routeactive: ActivatedRoute) { }

  ngOnInit(): void {

    this.routeactive.params.subscribe(params => {
      this.displayID = params['id'];
    });
    this.cssServ.getCssClass().subscribe(data => {
      this.cssclasses = data
    })
    this.displayserv.getDisplayByID(this.displayID).subscribe(data => {
      this.display = data
      if (this.display.grid_setting) {
        console.log(this.display.type)
        this.grid = this.display.grid_setting
        this.isGridChecked = true
      } 
      if (this.display.slider_setting) {
        console.log(this.display.type)
        this.slider = this.display.slider_setting
        this.isSliderChecked = true
        if (this.slider.bullets === 1) {
          this.arrowAndBullet = "Bullet"
        } else if (this.slider.arrows === 1) {
          this.arrowAndBullet = "Arrow"
        }
      }
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

  updateDisplay() {
    // operation on SLider Attributes
    if (this.isSliderChecked) {
      if (this.arrowAndBullet === "Arrow") {
        this.slider.arrows = 1
        this.slider.bullets = 0
      }
      else if (this.arrowAndBullet === "Bullet") {
        this.slider.arrows = 0
        this.slider.bullets = 1
      }
      if (this.slider.center_slides) {
        this.slider.center_slides = 1
      } else {
        this.slider.center_slides = 0
      }
      if (this.slider.loop_slides) {
        this.slider.loop_slides = 1
      } else {
        this.slider.loop_slides = 0
      }
      if (this.slider.auto_height) {
        this.slider.auto_height = 1
      } else {
        this.slider.auto_height = 0
      }
      if (this.slider.stretch_height) {
        this.slider.stretch_height = 1
      } else {
        this.slider.stretch_height = 0
      }
      if (this.slider.auto_play) {
        this.slider.auto_play = 1
      } else {
        this.slider.auto_play = 0
      }
      this.display.slider_setting = this.slider
       this.newUpdate.placeholder=this.display.placeholder
       this.newUpdate.source_page_id=this.display.source_page_id
       this.newUpdate.type=this.display.type
       this.newUpdate.display_template=this.display.display_template
       this.newUpdate.slider_setting=this.display.slider_setting

         
   
    } else if (this.isGridChecked) {
      this.display.grid_setting = this.grid
      this.newUpdate.placeholder=this.display.placeholder
      this.newUpdate.source_page_id=this.display.source_page_id
      this.newUpdate.type=this.display.type
      this.newUpdate.display_template=this.display.display_template
      this.newUpdate.grid_setting=this.display.grid_setting

   
  
       
    }



    this.displayserv.updateDisplay(this.newUpdate, this.displayID).subscribe(data => {
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
