import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/sharedServices/NavbarData/navbar.service';
import { CdkDragDrop, CdkDragStart, moveItemInArray } from "@angular/cdk/drag-drop";
import { orderBy } from 'lodash';
@Component({
  selector: 'app-navbar-display-form',
  templateUrl: './navbar-display-form.component.html',
  styleUrls: ['./navbar-display-form.component.css']
})
export class NavbarDisplayFormComponent implements OnInit {

  p: number = 1
  p2: number = 1
  navElements: any;
  showForm = false;
  showFormID = 0;
  newDropElemPri=0;
  newElemPri=0;
  parent_id!:number
    // to stop drag to the parent Element
  disableDrag:boolean=false
  // to hide the buttons 
  isDragging!:boolean
  constructor(private navbarServ: NavbarService) { }

  ngOnInit() {
    this.navbarServ.getElement().subscribe(data => {
      this.navElements = data.navBar
   //Set the New Priority to the Next Element to the NavBar Elements
      this.newElemPri=this.navElements.length+1
    })

  }

  displayDropDownForm(id: any,lastPriority:number) {
    if (this.showFormID === id) {
      this.showForm = false
      this.showFormID = 0
    }
    else {
      this.showFormID = id
      this.showForm = true
    }
    // to stop drag to the parent Element
    if(this.showForm===true){
      this.disableDrag=true
    }else {
      this.disableDrag=false
    }
    this.parent_id=id
    this.newDropElemPri=lastPriority+1
   

  }
  draggedElement: any;

onDragStarted(event: CdkDragStart, element: any) {
  this.draggedElement = element;
}

  // Sort Data By Priority 
  getSortedData(data: any, sortType: string) {
    if (sortType === 'asc') {
      return orderBy(data, 'priority', 'asc');
    } else  {
      return orderBy(data, 'priority', 'desc');
    }

  }



  deleteDisplay(ID: number) {
    if (confirm('Are you sure to delete this element ?'))
      this.navbarServ.deleteElement(ID).subscribe(data => {
        window.location.reload()
        alert("Navbar ELement deleted successfully")
      })

  }


  dataSource: any[] = [];


  //Handling Form Changeing the Priorty of the Drop ELements 
  changePriorityOfElem(event: CdkDragDrop<string[]>, elements: any, parent_id?: number) {

    this.dataSource = elements
    moveItemInArray(this.dataSource, event.previousIndex, event.currentIndex);
    this.updatePriority()

  }


  // Loop through the dataSource array and update the priority of each item  

  updatePriority() {




    this.dataSource.forEach((item, index) => {
      item.priority = index + 1;
   
      this.navbarServ.updateElement(this.dataSource[index], this.dataSource[index].id).subscribe(data => {
      
      })
    });


  }




}
