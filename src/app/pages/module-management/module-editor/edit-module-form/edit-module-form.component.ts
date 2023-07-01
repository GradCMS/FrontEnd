import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Module } from 'src/app/models/Module';
import { ClassbuilderService } from 'src/app/sharedServices/classbuilder/classbuilder.service';
import { ModuleService } from 'src/app/sharedServices/moduleData/module.service';

@Component({
  selector: 'app-edit-module-form',
  templateUrl: './edit-module-form.component.html',
  styleUrls: ['./edit-module-form.component.css']
})
export class EditModuleFormComponent implements OnInit {
  @Input() moduleID!:number;
  module:Module=new Module()
  cssclasses: any;
  
  constructor(private cssServ: ClassbuilderService,private moduleServ: ModuleService,private route :Router,private activeRoute :ActivatedRoute,private formBuilder: FormBuilder)
   {
       


    }
  ngOnInit(){
    this.cssServ.getClasses().subscribe(data  =>{
      this.cssclasses=data
      this.cssclasses=this.cssclasses.cssClasses
     })
     this.moduleServ.getModuleByID(this.moduleID).subscribe(data  =>{
      this.module=data.Module

       }  )

          //Validation 
     this.createForm();
  }



   //Validation 
   placeholderControl = new FormControl('', [Validators.required,Validators.minLength(3)]);
   widthControl = new FormControl('');
   animationControl = new FormControl('', Validators.required);
   classControl = new FormControl('', Validators.required);
   ckeditorControl=new FormControl('', [Validators.required]);
   titleControl=new FormControl('', [Validators.required,Validators.minLength(3)]);
   subtitleControl=new FormControl('', [Validators.required,Validators.minLength(3)]);
    moduleForm!: FormGroup;
 
   createForm() {
     this.moduleForm = this.formBuilder.group({
       placeholderControl: this.placeholderControl,
       widthControl: this.widthControl,
       animationControl: this.animationControl,
       classControl: this.classControl,
       ckeditorcontrol:this.ckeditorControl,
       titleControl:this.titleControl,
       subtitleControl:this.subtitleControl
     });
   }
  

  editModule(){
    
    this.moduleServ.updateModule(this.module,this.moduleID).subscribe(data=>{
      this.route.navigateByUrl('ModuleManagement')
    })



  }

  // Width Handle
  increment(): void {
    if (this.module.width < 100) {
      this.module.width++;
    }
  }

  decrement(): void {
    if (this.module.width > 0) {
      this.module.width--;
    }
  }


}
