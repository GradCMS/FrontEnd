import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { FormGroup, FormControl, Validator, FormArray } from '@angular/forms';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { DualListComponent } from 'angular-dual-listbox';
import { PageService } from 'src/app/sharedServices/pageData/page.service/page.service.component';
import { SnackbarComponent } from 'src/app/shared/snackbar/snackbar.component';
import { Router } from '@angular/router';

@Component({
	selector: 'app-page-create',
	templateUrl: './page-create.component.html',
	styleUrls: ['./page-create.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,

})
export class PageCreateComponent implements OnInit {
	
	@ViewChild('f', { static: false }) createPageForm!: FormGroup;
	@ViewChild('snackbar') private snackbar!: SnackbarComponent;
	message!:string
	type!:string

	// parents=[
	// {key:1 ,pageName:'page1'},
	// {key:2 ,pageName:'page2'},
	// {key:3 ,pageName:'page3'}]

	parents: any;
	invalidForm: boolean = false;
	enable = true;
	manualUpdate = 0;
	imageChangedEvent1: any = '';
	imageChangedEvent2: any = '';
	croppedImage1: any = '';
	croppedImage2: any = '';
	showImageCropper1 = true;
	showImageCropper2 = true;
	selectedFile1!: File;
	pages: any;
	createPage!: FormGroup;
	tab = 1;
	keepSorted = true;
	key: string = '';
	display: any;
	filter = false;
	source: Array<any> = [];
	confirmed: Array<any> = [];
	selectedModules: any[] = [];
	confirmedTest: string = '';
	userAdd = '';
	disabled = false;
	sourceLeft = true;
	format: any = DualListComponent.DEFAULT_FORMAT;
    images: File[] = [];
    




	constructor(private pageServ: PageService, private formBuilder: FormBuilder,private route :Router) {
	}

	ngOnInit() {
		this.pageServ.getStanderedPages().subscribe(data => {
			this.pages = data.standardPages

			this.parents = this.pages.map((item: { id: any; title: any; }) => ({ key: item.id, pageName: item.title }))
			console.log(this.parents)
		}
		)
		this.createPage = this.formBuilder.group({
			type: ['', Validators.required],
			title: ['', Validators.required],
			sub_title: ['', Validators.required],
			url: ['', Validators.required],
			parent_id: [''],
			tags: ['', Validators.required],
			short_description: ['', Validators.required],
			hidden: [this.manualUpdate],
			header_image_url: ['', Validators.required],
			cover_image_url: ['', Validators.required]
		});
	}

	header: any
	cover: any
	manualUpdateEvent() {
		if(this.manualUpdate===1){
			this.manualUpdate = 1
		}else{
			this.manualUpdate = 0
		}
		
	}
	onFileSelected(event: any, name:string) {
		const id = event.target.id;
		const coverImageUrlControl = this.createPage.controls['cover_image_url'];
		const headerImageUrlControl = this.createPage.controls['header_image_url'];	  
		
		
		if (id === 'header-image-upload-input'||name==='header_image_url') {
			this.imageChangedEvent1 = event;
			this.showImageCropper1 = true;
			const headerImageFile = (event.target as HTMLInputElement).files![0];
			const reader = new FileReader();
		  reader.onload = () => {
			headerImageUrlControl.setValue(headerImageFile);
			headerImageUrlControl.markAsTouched();
			headerImageUrlControl.markAsDirty();
		  };
		  reader.readAsDataURL(headerImageFile);
		  this.images[0]=headerImageFile
		
       
         
		}else  if (id === 'cover-image-upload-input'||name==='cover_image_url') {
			this.imageChangedEvent2 = event;
			this.showImageCropper2 = true;
			const coverImageFile = (event.target as HTMLInputElement).files![0];
			const reader = new FileReader();
			reader.onload = () => {
			  coverImageUrlControl.setValue(coverImageFile);
			 
			  coverImageUrlControl.markAsTouched();
			  coverImageUrlControl.markAsDirty();
			};
			reader.readAsDataURL(coverImageFile);
			console.log("cover")
			this.images[1]=coverImageFile
			
	}
	console.log(this.createPage.value)
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
	onSubmit() {
		console.log(this.createPage)
	 if (this.createPage.invalid) {
		 	this.invalidForm = true
			 this.message='Check Requried Inputs !' 
			 this.type="danger"
			 this.snackbar.show()
		  } else {
			const form = new FormData();
	
			
			Object.keys(this.createPage.controls).forEach(key => {
			if (this.createPage.controls['type'].value === 'standard') {
				if(key!=="parent_id"){

					form.append(key,this.createPage.get(key)?.value) 
			}}else{

				form.append(key,this.createPage.get(key)?.value) 
			}});	
			
			
				console.log(form)
	
         

	this.pageServ.creatPage(form).subscribe(()=>{
              
        this.message = "Page Created SuccessFully !"
        this.type = "success"
        this.snackbar.show()
		this.route.navigateByUrl('PageManagement')
      }, error => {
        console.log(error);
        this.message = "Something Went wrong !"
        this.type = "error"
        this.snackbar.show()
      });

			;
		}
 }



	saveCroppedImage(imageType: string) {
		if (imageType === 'header') {
			this.showImageCropper1 = false;
		}
		if (imageType === 'cover') {
			this.showImageCropper2 = false;
		}
	}


}

