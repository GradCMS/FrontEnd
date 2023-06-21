import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Module } from 'src/app/models/Module';
import { CssClassService } from 'src/app/sharedServices/classData/css-class.service';
import { ModuleService } from 'src/app/sharedServices/moduleData/module.service';

@Component({
  selector: 'app-edit-module-form',
  templateUrl: './edit-module-form.component.html',
  styleUrls: ['./edit-module-form.component.css']
})
export class EditModuleFormComponent implements OnInit {
  @Input() moduleID!:number;
  module=new Module 
  cssclasses: any;
  
  constructor(private cssServ: CssClassService,private moduleServ: ModuleService,private route :Router,private activeRoute :ActivatedRoute)
   {
       


    }
  ngOnInit(){
    this.cssServ.getCssClass().subscribe(data  =>{
      this.cssclasses=data
     })
     this.moduleServ.getModuleByID(this.moduleID).subscribe(data  =>{
      this.module=data
     })
  }
  

  editModule(){
    
    this.moduleServ.updateModule(this.module,this.moduleID).subscribe(data=>{
      this.route.navigateByUrl('ModuleManagement')
    })



  }


}
