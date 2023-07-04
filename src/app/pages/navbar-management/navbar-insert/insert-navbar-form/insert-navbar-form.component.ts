import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/sharedServices/NavbarData/navbar.service';
import { CommonModule } from '@angular/common';
import { NavElements } from 'src/app/models/NavElements';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PageService } from 'src/app/sharedServices/pageData/page.service/page.service.component';
@Component({
  selector: 'app-insert-navbar-form',
  templateUrl: './insert-navbar-form.component.html',
  styleUrls: ['./insert-navbar-form.component.css']
})
export class InsertNavbarFormComponent implements OnInit {
  pages:any;
  newElement: NavElements=new NavElements();
  dropList: boolean = false
  
  constructor(private navbarServ: NavbarService,private pageServ:PageService,private routeActive: ActivatedRoute,private route :Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.routeActive.params.subscribe(params => {
      const parentId = parseInt(params['parentId']);
      const newPriority = parseInt(params['newPriority']);
      if(parentId!=0){
         this.newElement.parent_id=parentId
      }
      this.newElement.priority=newPriority
    });
    this.pageServ.getAllPages().subscribe(data=>{
   this.pages=data.pages
   
    })

    //Validation 
    this.createFormValidation()
  
  }




  //Validataion Form and Attributes 
    nameControl=new FormControl('', [Validators.required,Validators.minLength(3),Validators.maxLength(15)]);
    pageControl=new FormControl('', [Validators.required]);
    moduleForm!: FormGroup

  createFormValidation(){
    this.moduleForm = this.formBuilder.group({
      nameControl:this.nameControl,
      pageControl:this.pageControl
   
    })
    console.log(this.moduleForm)
  }
    

  

  
  

  insertNewElement(){
 this.navbarServ.addElement(this.newElement).subscribe(data=>{
  this.route.navigateByUrl('NavbarElements')
 })


  }
}
