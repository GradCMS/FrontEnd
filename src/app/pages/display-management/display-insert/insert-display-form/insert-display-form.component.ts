import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Display } from 'src/app/models/Display';
import { GridSetting } from 'src/app/models/GridSetting';
import { SliderSetting } from 'src/app/models/SliderSetting';
import { DisplayService } from 'src/app/sharedServices/DisplayData/display.service';
import { ClassbuilderService } from 'src/app/sharedServices/classbuilder/classbuilder.service';
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
    slides_per_row: 1,
    slides_per_column: 1,
    total_slides: 1,
    slides_spacing: 1,
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
    blocks_count: 1,
    blocks_per_row: 1,
    blocks_spacing: 1,
    class_id: this.num,
    blocks_animation: this.str,
    horizontal_alignment: this.str,
    vertical_alignment: this.str
  };
  constructor(private cssServ: ClassbuilderService, private displayserv: DisplayService,private route :Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.cssServ.getClasses().subscribe(data => {
      this.cssclasses=data
      this.cssclasses=this.cssclasses.cssClasses
    })


    this.createForm()
  }
 print(){

 }

 displayBool:boolean=false
 sliderBool:boolean=false
 gridBool:boolean=false

  //Validation in Slider and Grid and DisplayMain Settings !!
  displayManagerForm!: FormGroup;
  placeholderControl= new FormControl('', [Validators.required,Validators.minLength(3)])
  typeControl= new FormControl('', [Validators.required])
  source_page_idControl= new FormControl('', [Validators.required])

  //SliderForm
  sliderForm!: FormGroup;
  slidesPerRowControl=new FormControl('')
  slidesPerColumnControl=new FormControl('')
  totalSlidesControl=new FormControl('')
  slidesSpacingControl=new FormControl('')
  centerSlidesControl=new FormControl('', [Validators.required])
  loopSlidesControl=new FormControl('', [Validators.required])
  autoHeightControl=new FormControl('', [Validators.required])
  stretchHeightControl=new FormControl('', [Validators.required])
  classIdControl=new FormControl('', [Validators.required])
  animationControl=new FormControl('', [Validators.required])
  autoPlayControl=new FormControl('', [Validators.required])
  effectSpeedMsControl=new FormControl('', [Validators.required])
  arrowAndBulletControl=new FormControl('', [Validators.required])
  gridForm!: FormGroup;
  blocks_count= new FormControl('')
  blocks_per_row= new FormControl('')
  blocks_spacing= new FormControl('')
  class_id= new FormControl('',[Validators.required])
  blocks_animation= new FormControl('',[Validators.required])
  horizontal_alignment= new FormControl('',[Validators.required])
  vertical_alignment= new FormControl('',[Validators.required])
  

  createForm(){
    this.displayManagerForm =this.formBuilder.group({
      placeholderControl: this.placeholderControl,
      typeControl: this.typeControl,
      source_page_idControl: this.source_page_idControl
    });
    this.sliderForm=this.formBuilder.group({
      slidesPerRow: this.slidesPerRowControl,
      slidesPerColumn: this.slidesPerColumnControl,
      totalSlides: this.totalSlidesControl,
      slidesSpacing: this.slidesSpacingControl,
      centerSlides: this.centerSlidesControl,
      loopSlides: this.loopSlidesControl,
      autoHeight: this.autoHeightControl,
      stretchHeight: this.stretchHeightControl,
      classId: this.classIdControl,
      animation: this.animationControl,
      autoPlay: this.autoPlayControl,
      effectSpeedMs: this.effectSpeedMsControl,
      arrowAndBullet: this.arrowAndBulletControl
    })
    this.gridForm=this.formBuilder.group({

      blocks_count: this.blocks_count,
      blocks_per_row: this.blocks_per_row,
      blocks_spacing: this.blocks_spacing,
      class_id:this.class_id,
      blocks_animation: this.blocks_animation,
      horizontal_alignment: this.horizontal_alignment,
      vertical_alignment: this.vertical_alignment




      
    })




  }
// Handling + and - in in input 
  increment(data:number,max:number): number {
    if (data < max) {
     data++;
    }
    return data
  }

  decrement(data:number,min:number): number {
    if (data > min) {
     data--;
    }
    return data
  }

  insertNewDisplay() {
    this.newDisplay.display_template='Template 1'
    // operation on SLider Attributes
    
    if(this.displayManagerForm.invalid){
       this.displayBool=true
       if(this.gridForm.invalid&&this.isGridChecked){
        this.gridBool=true}
        else if(this.sliderForm.invalid&&this.isSliderChecked){
    
          this.sliderBool=true}

    }else if(this.sliderForm.invalid&&this.isSliderChecked){
    
         this.sliderBool=true
      
    }
    else if(this.gridForm.invalid&&this.isGridChecked){
          this.gridBool=true
    }
    else{
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
    })}
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
  console.log(this.displayManagerForm)
  }
}
