import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NavElements } from 'src/app/models/NavElements';
import { NavbarService } from 'src/app/sharedServices/NavbarData/navbar.service';
import { PageService } from 'src/app/sharedServices/pageData/page.service/page.service.component';

@Component({
  selector: 'app-edit-navbar-form',
  templateUrl: './edit-navbar-form.component.html',
  styleUrls: ['./edit-navbar-form.component.css']
})
export class EditNavbarFormComponent implements OnInit {
  pages:any;
  id!: number
  editElement: NavElements = new NavElements()
  updatedElement: NavElements = new NavElements()

  
  constructor(private routeActive: ActivatedRoute,private pageServ:PageService , private route: Router, private navServ: NavbarService,private formBuilder: FormBuilder) { }



  ngOnInit(): void {
   //>>    Get ID of page Url  << 
    this.routeActive.params.subscribe(params => {
      this.id = parseInt(params['id']);
    });

  //>>    Get NavBar Element   << 
    this.navServ.getElementByID(this.id).subscribe(data => {
      this.editElement = data.element

    })

    this.pageServ.getAllPages().subscribe(data=>{
      this.pages=data.pages
      
       })
  //>>    Validation  <<   
  this.createFormValidation()


  }
    //Check Validation>>>>>>>>>>
    nameControl=new FormControl('', [Validators.required,Validators.minLength(3),Validators.maxLength(15)]);
    pageControl=new FormControl('', [Validators.required]);
    moduleForm!: FormGroup

  createFormValidation(){
    this.moduleForm = this.formBuilder.group({
      nameControl:this.nameControl,
      pageControl:this.pageControl
   
    })
  
  }


  editElem(){
    this.updatedElement.name=this.editElement.name
    this.updatedElement.referenced_page=this.editElement.referenced_page
    this.navServ.updateElement(this.updatedElement,this.id).subscribe(data=>{
   this.route.navigateByUrl('NavbarElements')


    })
  }

}


