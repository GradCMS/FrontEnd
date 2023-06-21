import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/sharedServices/NavbarData/navbar.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-insert-navbar-form',
  templateUrl: './insert-navbar-form.component.html',
  styleUrls: ['./insert-navbar-form.component.css']
})
export class InsertNavbarFormComponent implements OnInit {
  p:number =1
  navElements: any;
  dropList: boolean = false
  constructor(private navbarServ: NavbarService) { }

  ngOnInit(): void {
    this.navbarServ.getElement().subscribe(data =>{
      this.navElements=data
    })
  }
  checkStatus(event: any) {
   console.log(event.target.checked)
    if (event.target.checked === true) {
         this.dropList=true
    }else {
      this.dropList=false
    }
  
  }

    deleteElement(ID:number){
      if(confirm('Are you sure to delete this element ?'))
       this.navbarServ.deleteElement(ID).subscribe(data=>{
        window.location.reload()
        alert("Navbar ELement deleted successfully")
       })
  
  } 
}
