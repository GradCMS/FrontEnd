import { Component, OnInit,ViewChild,ChangeDetectionStrategy } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { FormGroup, FormControl, Validator,FormArray } from '@angular/forms';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { DualListComponent } from 'angular-dual-listbox';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ActivatedRoute, Params } from '@angular/router';
import { PageService } from 'src/app/sharedServices/pageData/page.service/page.service.component';



@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class PageEditComponent implements OnInit {
  type=['standard','content'];
  default!:string;
  parents:any;
  enable= true;
  manualUpdate = false;
  imageChangedEvent1: any = '';
  imageChangedEvent2: any = '';
  croppedImage1: any = '';
  croppedImage2: any = '';
  showImageCropper1 = true;
  showImageCropper2 = true;
  editPage!:FormGroup;

   selectedFile1!: File;
   Modules!:Array<any>;
   Displays!:Array<any>;

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

	private sourceModules: Array<any>=[];
	private confirmedModules: Array<any>=[];

	private AllModules: Array<any> = [
		{ id: 1, placeholder: 'Model1', priority:1},
		{ id: 2, placeholder: 'Model2', priority:2},
		{ id: 3, placeholder: 'Model3', priority:3},
		{ id: 4, placeholder: 'Model4', priority:4},
		{ id: 14, placeholder: 'Model5', priority:5},
		{ id: 13, placeholder: 'Model6', priority:6}
		
	];
	private AllDisplays: Array<any> = [
		{ id: 7, placeholder: 'display1', priority:1},
		{ id: 8, placeholder: 'display2', priority:2},
		{ id: 9, placeholder: 'display3', priority:3},
		{ id: 10, placeholder: 'display4', priority:4},
		{ id: 11, placeholder: 'display5', priority:5},
		{ id: 12, placeholder: 'display6', priority:6}
		
	];
	
	

	private module_placeholders: Array<any> = [];
	selectedModulesData: { id: number, placeholder: string ,priority:number }[] = [];
	object: any;
	pages: any;
	page: any;
	combinedModules!: any[];
	formBuilder: any;
	display_placeholders: any;

	  constructor(private route: ActivatedRoute, private pageServ: PageService) {
	  }

  ngOnInit() {
	
	this.route.params.subscribe((params: Params) => {
		this.object = params   
		console.log(this.object)
	});
	this.pageServ.getAllPages().subscribe(data  =>{
	  this.pages=data
	  console.log(this.pages)

	  this.parents= this.pages.map((item: { id: any; title: any; }) => ({key:item.id, pageName: item.title }))
	    console.log(this.parents)
	 })
	this.pageServ.getPageByID(this.object.id).subscribe(data  =>{
	  this.page=data
      console.log(this.page)
	

		this.default=this.page.type
		this.manualUpdate=this.page.hidden
		this.display_placeholders=this.page.page_displays
		this.display_placeholders.sort((a: { priority: number; },b: { priority: number; }) => a.priority - b.priority);
		this.Displays = this.display_placeholders.map((item: { id: any; placeholder: any; priority: any; }) => ({ id: item.id, placeholder: item.placeholder, priority: item.priority  }));
			console.log(this.Displays)
		this.module_placeholders=this.page.modules
		this.module_placeholders.sort((a, b) => a.priority - b.priority);
		this.Modules = this.module_placeholders.map(item => ({ id: item.id, placeholder: item.placeholder, priority: item.priority  }));
			console.log(this.Modules)

			this.sourceModules = this.AllModules.concat(this.AllDisplays);
			console.log(this.sourceModules)


		this.confirmedModules= this.Modules.concat(this.Displays);
		console.log(this.confirmedModules)

		
				

			this.key = 'id';
			this.display = this.moduleNameLabel;
			this.keepSorted = true;
			this.source = this.sourceModules;	
			this.confirmed = this.confirmedModules;
			this.combinedModules = [...this.confirmed];
			this.source.forEach(module => {
				const foundModule = this.combinedModules.find(m => m.id === module.id);
					if (!foundModule) {
					this.combinedModules.push(module);
					}

			  });
			  
			  
			this.source = this.combinedModules;

			console.log(this.source)
			this.confirmed = this.confirmedModules;
			console.log(this.confirmed)
			this.selectedModules = this.confirmed.slice();
			console.log(this.selectedModules)

			const modulesArray = this.selectedModules.map((module, index) => {
				return new FormGroup({
				  id: new FormControl(module.id),
				  placeholder: new FormControl(module.placeholder),
				  priority: new FormControl(index + 1), // Assign consecutive priority values
				});
			  });

			  const displaysArray = this.selectedModules.map((display, index) => {
				return new FormGroup({
				  id: new FormControl(display.id),
				  placeholder: new FormControl(display.placeholder),
				  priority: new FormControl(index + 1), // Assign consecutive priority values
				});
			  });

			
			  
			this.editPage = new FormGroup({
				type: new FormControl(this.page.type, Validators.required),
				title: new FormControl(this.page.title, Validators.required),
				url: new FormControl(this.page.url, Validators.required),
				parent_id: new FormControl(this.page.parent_id, Validators.required),
				tags: new FormControl(this.page.tags),
				short_description: new FormControl(this.page.short_description),
				hidden: new FormControl(this.page.hidden, Validators.required),
				header_image_url: new FormControl(this.page.header_image_url),
				cover_image_url: new FormControl(this.page.cover_image_url),
				modules: new FormArray(modulesArray), 
				page_displays: new FormArray(displaysArray), 

			  });

			  			this.selectedModules = (this.editPage.get('modules')?.value || []);

					  console.log(this.editPage.value)


 

 })
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
  onSubmit(){
  console.log("Submited");
  console.log(this.editPage.value);
  this.pageServ.updatePage(this.editPage.value,this.object.id).subscribe(page => this.pages.patch(page));


  }

  saveCroppedImage(imageType:string) {
    if (imageType === 'header') {
    this.showImageCropper1 = false;
    }
    if (imageType === 'cover') {
    this.showImageCropper2 = false;
    }
  }
  
  private moduleNameLabel(item: any) {
		return item.placeholder ;
	}

	/*private useModules() {
		this.key = 'key';
		this.display = this.moduleNameLabel;
		this.keepSorted = true;
		this.source = this.sourceModules;
		this.confirmed = this.confirmedModules;
	
	}*/


	
	


	doDelete() {
		if (this.source.length > 0) {
			this.source.splice(0, 1);
		}
	}

	doCreate() {
    if (typeof this.source[0] === 'object') {
        const o = {} as any; 
        o[this.key] = this.source.length + 1;
        o[this.display] = this.userAdd;
        this.source.push(o);
    } else {
        this.source.push(this.userAdd);
    }
    this.userAdd = '';
}


doAdd() {
	const selectedModule = this.source.find((module: { id: any; }) => module.id === this.userAdd);
	if (selectedModule) {
	  this.selectedModules.push(selectedModule);
	  this.updateSelectedModules(); // Update the selectedModules in the form control
	}
  }
  
  doRemove() {
	const index = this.selectedModules.findIndex((module: { id: any; }) => module.id === this.userAdd);
	if (index !== -1) {
	  this.selectedModules.splice(index, 1);
	  this.updateSelectedModules(); // Update the selectedModules in the form control
	}
  }
  
  updateSelectedModules() {
	const modulesArray = this.selectedModules.map((module, index) => {
	  return new FormGroup({
		id: new FormControl(module.id),
		placeholder: new FormControl(module.placeholder),
		priority: new FormControl(index + 1),
	  });
	});
  
	this.editPage.setControl('modules', new FormArray(modulesArray)); // Update the 'modules' FormArray in the editPage FormGroup
  }
  
  
	doDisable() {
		this.disabled = !this.disabled;
	}

	disableBtn() {
		return (this.disabled ? 'Enable' : 'Disabled');
	}

	swapDirection() {
		this.sourceLeft = !this.sourceLeft;
		this.format.direction = this.sourceLeft ? DualListComponent.LTR : DualListComponent.RTL;
	}


	drop(event: CdkDragDrop<string[]>) {
		moveItemInArray(this.selectedModules, event.previousIndex, event.currentIndex);
		this.selectedModulesData = this.selectedModules.map((module, index) => {
		  return { ...module, priority: index + 1 };
		});
		this.updateSelectedModules(); // Update the form control value
	  }
	  
	  
}

