import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Display } from 'src/app/models/Display';
import { GridSetting } from 'src/app/models/GridSetting';
import { SliderSetting } from 'src/app/models/SliderSetting';
import { DisplayService } from 'src/app/sharedServices/DisplayData/display.service';
import { ClassbuilderService } from 'src/app/sharedServices/classbuilder/classbuilder.service';
import { PageService } from 'src/app/sharedServices/pageData/page.service/page.service.component';
@Component({
  selector: 'app-edit-display-form',
  templateUrl: './edit-display-form.component.html',
  styleUrls: ['./edit-display-form.component.css']
})
export class EditDisplayFormComponent implements OnInit {
  displayID!: number
  cssclasses: any;
  parentPages:any;
  isSliderChecked: boolean = false
  isGridChecked: boolean = false
  display: Display = new Display
  newUpdate: Display = new Display()
  num!: number
  str!: string
  arrowAndBullet!: string
  displayBool:boolean=false
  sliderBool:boolean=false
  gridBool:boolean=false
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
    effect_speed_ms: 0,
    created_at:this.str,
    updated_at:this.str,
    id:this.num
  }
  grid: GridSetting = {
    blocks_count: this.num,
    blocks_per_row: this.num,
    blocks_spacing: this.num,
    class_id: this.num,
    blocks_animation: this.str,
    horizontal_alignment: this.str,
    vertical_alignment: this.str,
    created_at:this.str,
    updated_at:this.str,
    id:this.num
  };
  constructor(private cssServ: ClassbuilderService,private pageServ:PageService, private displayserv: DisplayService, private route: Router, private routeactive: ActivatedRoute,private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.routeactive.params.subscribe(params => {
      this.displayID = params['id'];
    });
    this.cssServ.getClasses().subscribe(data => {
      this.cssclasses=data
      this.cssclasses=this.cssclasses.cssClasses
   
    })
    this.pageServ.getParentPages().subscribe(data=>{
      this.parentPages=data.parentPages
      console.log(this.parentPages)

    })
    this.displayserv.getDisplayByID(this.displayID).subscribe(data => {
      this.display=data.Display
      console.log(this.display.grid_setting)
      console.log(this.display)
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
    
    this.createForm()

  }

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




      
    })}

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

  updateDisplay() {
    // operation on SLider Attributes
    console.log(this.displayManagerForm)
    console.log(this.gridForm)
    if(this.displayManagerForm?.invalid){
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

  }
}
