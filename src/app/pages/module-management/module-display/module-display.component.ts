import { Component, OnInit } from '@angular/core';
import { ModuleService } from 'src/app/sharedServices/moduleData/module.service';

@Component({
  selector: 'app-module-display',
  templateUrl: './module-display.component.html',
  styleUrls: ['./module-display.component.css']
})
export class ModuleDisplayComponent implements OnInit {
  modules: any;
  constructor(private moduleServ: ModuleService) { 

  }

  ngOnInit() {
    this.moduleServ.getModules().subscribe(data  =>{
      this.modules=data
     })

  }

}
