
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ClassbuilderService } from 'src/app/sharedServices/classbuilder/classbuilder.service';
import { ModuleService } from 'src/app/sharedServices/moduleData/module.service';
import{Module} from 'src/app/models/Module'
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-module-form',
  templateUrl: './insert-module-form.component.html',
  styleUrls: ['./insert-module-form.component.css']
})
export class InsertModuleFormComponent implements OnInit {
  newModule = new Module
  cssID!: number
  cssclasses: any;

 
  isButtonDisabled = true;
  constructor(private cssServ: ClassbuilderService,private moduleServ: ModuleService,private route :Router,private formBuilder: FormBuilder)
   {

    }
  ngOnInit(){
    this.cssServ.getClasses().subscribe(data  =>{
      this.cssclasses=data
      this.cssclasses=this.cssclasses.cssClasses
     },
     )
     this.newModule.width=0 
     //Validation 
     this.createForm();

  }


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


  insertModule(){
    this.moduleServ.addModule(this.newModule).subscribe(data=>{
      this.route.navigateByUrl('ModuleManagement')
    })}



// Width Handle
    increment(): void {
      if (this.newModule.width < 100) {
        this.newModule.width++;
      }
    }
  
    decrement(): void {
      if (this.newModule.width > 0) {
        this.newModule.width--;
      }
    }


  }


