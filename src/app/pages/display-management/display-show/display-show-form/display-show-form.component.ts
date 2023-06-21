import { Component, OnInit } from '@angular/core';
import { DisplayService } from 'src/app/sharedServices/DisplayData/display.service';

@Component({
  selector: 'app-display-show-form',
  templateUrl: './display-show-form.component.html',
  styleUrls: ['./display-show-form.component.css']
})
export class DisplayShowFormComponent implements OnInit {
  p:number =1
  displays: any;
  constructor(private displayServ: DisplayService) { 

  }

  ngOnInit(){
    this.displayServ.getDisplay().subscribe(data =>{
      this.displays=data
    })

  }
  deleteDisplay(ID:number){
    if(confirm('Are you sure to delete this display ?'))
     this.displayServ.deleteDisplay(ID).subscribe(data=>{
      window.location.reload()
      alert("Display deleted successfully")
     })

}}
