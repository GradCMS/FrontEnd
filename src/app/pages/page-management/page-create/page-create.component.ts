import { Component, OnInit,ViewChild,ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { FormGroup, FormControl, Validator,FormArray } from '@angular/forms';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { DualListComponent } from 'angular-dual-listbox';
import { PageService } from 'src/app/sharedServices/pageData/page.service/page.service.component';

@Component({
  selector: 'app-page-create',
  templateUrl: './page-create.component.html',
  styleUrls: ['./page-create.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class PageCreateComponent implements OnInit {
	@ViewChild('f', { static: false }) createPageForm!: FormGroup;
	parents=[
	{key:1 ,pageName:'page1'},
	{key:2 ,pageName:'page2'},
	{key:3 ,pageName:'page3'}]
	enable= true;
	manualUpdate = false;
	imageChangedEvent1: any = '';
	imageChangedEvent2: any = '';
	croppedImage1: any = '';
	croppedImage2: any = '';
	showImageCropper1 = true;
	showImageCropper2 = true;
	selectedFile1!: File;
		pages:any;
	createPage!:FormGroup;
	  tab = 1;
	  keepSorted = true;
	  key: string='';
	  display: any;
	  filter = false;
	  source: Array<any>=[];
	  confirmed: Array<any>=[];
	  selectedModules: any []=[];
	  confirmedTest: string='';
	  userAdd = '';
	  disabled = false;
	  sourceLeft = true;
	  format: any = DualListComponent.DEFAULT_FORMAT;

  
  
	
  
  
		constructor(private pageServ: PageService,private formBuilder: FormBuilder) {
		}
  
	ngOnInit() {
		this.pageServ.getAllPages().subscribe(data  =>{
			this.pages=data}
	)
	this.createPage = this.formBuilder.group({
		  type: ['', Validators.required],
		  title: ['', Validators.required],
		  url: ['', Validators.required],
		  parent_id: [''],
		  tags: [''],
		  short_description: [''],
		  hidden: [false],
		  header_image_url: [''],
		  cover_image_url: [''],
	  });
}
	

	manualUpdateEvent() {
	 this.manualUpdate=!this.manualUpdate;
	}
	onFileSelected(event: any) {
	  const id = event.target.id;
	  this.selectedFile1=<File>event.target.files[0];
	  if (id === 'header-image-upload-input') {
		this.imageChangedEvent1 = event;
		this.showImageCropper1 = true;
	  } else if (id === 'cover-image-upload-input') {
		this.imageChangedEvent2 = event;
		this.showImageCropper2 = true;
	  }
	}
	dropdownSettings = {
	  singleSelection: false,
	  idField: 'id',
	  textField: 'name',
	  selectAllText: 'Select All',
	  unSelectAllText: 'Unselect All',
	  itemsShowLimit: 3,
	  allowSearchFilter: true
	};
	onImageCropped(event: ImageCroppedEvent, imageType: string): void {
	  if (imageType === 'header') {
		this.croppedImage1 = event.base64;
	  } else if (imageType === 'cover') {
		this.croppedImage2 = event.base64;
	  }
	}
	
  
	onImageLoaded(): void {
	  console.log('Image loaded');
	}
  
	onLoadImageFailed(): void {
	  console.log('Load image failed');
	}
	onSubmit( ){
	console.log("Submited");
	console.log(this.createPage);
	this.pageServ.creatPage(this.createPage.value).subscribe(page => this.pages.push(page));
	}
 

	saveCroppedImage(imageType:string) {
	  if (imageType === 'header') {
	  this.showImageCropper1 = false;
	  }
	  if (imageType === 'cover') {
	  this.showImageCropper2 = false;
	  }
	}
	

}

