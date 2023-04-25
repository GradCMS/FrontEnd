import { Component, OnInit } from '@angular/core';
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
  newModule=new Module 
  cssID!:number 
  cssclasses: any;
  constructor(private cssServ: CssClassService,private moduleServ: ModuleService,private route :Router)
   {

    }
  ngOnInit(){
    this.cssServ.getCssClass().subscribe(data  =>{
      this.cssclasses=data
     })
  }

  insertModule(){
    this.moduleServ.addModule(this.newModule).subscribe(data=>{
      this.route.navigateByUrl('ModuleManagement')
    })



  }

}
