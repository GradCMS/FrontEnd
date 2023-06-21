
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CssClassService } from 'src/app/sharedServices/classData/css-class.service';
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

   placeholderControl = new FormControl('', Validators.required);
   widthControl = new FormControl('', Validators.required);
   animationControl = new FormControl('', Validators.required);
   classControl = new FormControl('', Validators.required);
   ckeditorcontrol=new FormControl('', [Validators.required]);
  moduleForm!: FormGroup;
  isButtonDisabled = true;
  constructor(private cssServ: CssClassService,private moduleServ: ModuleService,private route :Router,private formBuilder: FormBuilder)
   {

    }
  ngOnInit(){
    this.cssServ.getCssClass().subscribe(data  =>{
      this.cssclasses=data
     })
    
     this.createForm();

  }


  createForm() {
    this.moduleForm = this.formBuilder.group({
      placeholderControl: this.placeholderControl,
      widthControl: this.widthControl,
      animationControl: this.animationControl,
      classControl: this.classControl,
      ckeditorcontrol:this.ckeditorcontrol
    });
  }


  insertModule(){
    this.moduleServ.addModule(this.newModule).subscribe(data=>{
      this.route.navigateByUrl('ModuleManagement')
    })}

    updateButtonDisabledState() {
      this.isButtonDisabled = !(
       this.moduleForm.valid
      );
    }




  }


