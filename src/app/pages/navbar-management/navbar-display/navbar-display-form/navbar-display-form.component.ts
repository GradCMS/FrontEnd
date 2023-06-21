import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/sharedServices/NavbarData/navbar.service';
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
@Component({
  selector: 'app-navbar-display-form',
  templateUrl: './navbar-display-form.component.html',
  styleUrls: ['./navbar-display-form.component.css']
})
export class NavbarDisplayFormComponent implements OnInit {

  p:number =1
  navElements: any;
  showForm = false;
  showFormID=0;
  constructor(private navbarServ: NavbarService) { }

  ngOnInit(){
    this.navbarServ.getElement().subscribe(data =>{
      this.navElements=data
    })

  }
  displayDropDownForm(id:any){
    if(this.showFormID===id){
    this.showForm=false 
    this.showFormID=0}
    else{
      this.showFormID=id
      this.showForm=true
    }


  }

  deleteDisplay(ID:number){
    if(confirm('Are you sure to delete this element ?'))
     this.navbarServ.deleteElement(ID).subscribe(data=>{
      window.location.reload()
      alert("Navbar ELement deleted successfully")
     })

}


dataSource = [
  { id: 1, name: "Angular", price: "45.00" },
  { id: 2, name: "React Js", price: "30.00" },
  { id: 3, name: "Vue Js", price: "20.00" }
];
drop(event: CdkDragDrop<string[]>) {
  moveItemInArray(this.dataSource, event.previousIndex, event.currentIndex);
}

  
}
