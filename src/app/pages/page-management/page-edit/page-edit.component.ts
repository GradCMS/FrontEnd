import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { FormGroup, FormControl, Validator, FormArray } from '@angular/forms';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { DualListComponent } from 'angular-dual-listbox';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ActivatedRoute, Params } from '@angular/router';
import { PageService } from 'src/app/sharedServices/pageData/page.service/page.service.component';
import { ModuleService } from 'src/app/sharedServices/moduleData/module.service';
import { DisplayService } from 'src/app/sharedServices/DisplayData/display.service';
import { Module } from 'src/app/models/Module';
import { SnackbarComponent } from 'src/app/shared/snackbar/snackbar.component';



@Component({
	selector: 'app-page-edit',
	templateUrl: './page-edit.component.html',
	styleUrls: ['./page-edit.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,

})
export class PageEditComponent implements OnInit {
	@ViewChild('snackbar') private snackbar!: SnackbarComponent;
	message!:string
	typeMessage!:string

	type = ['standard', 'content'];

	parents: any;
	enable = true;
	manualUpdate = 0;
	imageChangedEvent1: any = '';
	imageChangedEvent2: any = '';
	croppedImage1: any = '';
	croppedImage2: any = '';
	showImageCropper1 = true;
	showImageCropper2 = true;
	editPage!: FormGroup;
	invalidForm: boolean = false;
	selectedFile1!: File;
	Modules!: Array<any>;
	Displays!: Array<any>;

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

	private sourceModules: Array<any> = [];
	private confirmedModules: Array<any> = [];

	AllModules: Array<any> = [];
	AllDisplays: Array<any> = [];



	private module_placeholders: Array<any> = [];
	selectedModulesData: { id: number, placeholder: string, priority: number }[] = [];
	object: any;
	pages: any;
	page: any;
	combinedModules!: any[];
	formBuilder: any;
	display_placeholders: any;

	constructor(private route: ActivatedRoute, private pageServ: PageService, private moduleServ: ModuleService, private displayServ: DisplayService) {
	}
  
	onTagsChange(name:string) {
		console.log(this.editPage.get(name)?.value);
	  }
	ngOnInit() {

		this.route.params.subscribe((params: Params) => {
			this.object = params
			console.log(this.object)
		});
		this.pageServ.getStanderedPages().subscribe(data => {
			this.pages = data.standardPages

			this.parents = this.pages.map((item: { id: any; title: any; }) => ({ key: item.id, pageName: item.title }))
			console.log(this.parents)
		})

		this.pageServ.getPageByID(this.object.id).subscribe(data => {
			this.page = data.page
			console.log(this.page)

			this.moduleServ.getModules().subscribe(data => {
				this.AllModules = data.modules

				this.AllModules = this.AllModules.map((item: { id: number; placeholder: any; }) => ({
					id: item.id, placeholder: item.placeholder,type:"module"
				}))

				this.displayServ.getDisplay().subscribe(data => {
					this.AllDisplays = data.Displays
                    console.log(this.AllDisplays)
					this.AllDisplays = this.AllDisplays.map((item: { id: number; placeholder: any; }) => ({
						id: item.id, placeholder: item.placeholder,type:"display"
					}))


				
					this.manualUpdate = this.page.hidden
					this.display_placeholders = this.page.page_displays
					this.display_placeholders.sort((a: { priority: number; }, b: { priority: number; }) => a.priority - b.priority);
					this.Displays = this.display_placeholders.map((item: { id: any; placeholder: any; priority: any; }) => ({ id: item.id, placeholder: item.placeholder, priority: item.priority,type:"display" }));
					console.log(this.Displays)
					this.module_placeholders = this.page.modules
					this.module_placeholders.sort((a, b) => a.priority - b.priority);
					this.Modules = this.module_placeholders.map(item => ({ id: item.id, placeholder: item.placeholder, priority: item.priority,type:"module" }));
					console.log(this.Modules)

					this.sourceModules = this.AllModules.concat(this.AllDisplays);
					console.log(this.sourceModules)


					this.confirmedModules = this.Modules.concat(this.Displays);
					console.log(this.confirmedModules)




					this.key = 'id';
					this.display = this.moduleNameLabel;
					this.keepSorted = true;
					this.source = this.sourceModules;
					console.log(this.source)
					this.confirmed = this.confirmedModules;
					this.combinedModules = [...this.confirmed];
					this.source.forEach(module => {
						const foundModule = this.combinedModules.find(m => m.id === module.id);
						console.log(module)
						if (!foundModule) {
							this.combinedModules.push(module);
						}

					});
				
		            console.log(this.combinedModules)


			this.source = this.combinedModules;

			console.log(this.source)
			this.confirmed = this.confirmedModules;
			console.log(this.confirmed)
			this.selectedModules = this.confirmed.slice();
			console.log(this.selectedModules)
			const modulesArray: any[] = [];
			const displaysArray: any[] = [];
			
			this.selectedModules.forEach((item, index) => {
			  if (item.type === 'module') {
				modulesArray.push(new FormGroup({
				  id: new FormControl(item.id),
				  placeholder: new FormControl(item.placeholder),
				  priority: new FormControl(index + 1)
				}));
			  } else if (item.type === 'display') {
				displaysArray.push(new FormGroup({
				  id: new FormControl(item.id),
				  placeholder: new FormControl(item.placeholder),
				  priority: new FormControl(index + 1)
				}));
			  }
			});

          

			this.editPage = new FormGroup({
				type: new FormControl(this.page.type, Validators.required),
				title: new FormControl(this.page.title, Validators.required),
				sub_title: new FormControl(this.page.sub_title, Validators.required),
				url: new FormControl(this.page.url, Validators.required),
				parent_id: new FormControl(this.page.parent_id, Validators.required),
				tags: new FormControl(this.page.tags),
				short_description: new FormControl(this.page.short_description),
				hidden: new FormControl(this.page.hidden),
				header_image_url: new FormControl(this.page.header_image_url),
				cover_image_url: new FormControl(this.page.cover_image_url),
				modules: new FormArray(modulesArray),
				page_displays: new FormArray(displaysArray),

			});

			
			console.log(this.selectedModules)
			console.log(this.editPage.value)




		})	})})
	}
	manualUpdateEvent() {
		if(this.manualUpdate===1){
			this.manualUpdate = 1
		}else{
			this.manualUpdate = 0
		}
		
	}
	onFileSelected(event: any) {
		const id = event.target.id;
		this.selectedFile1 = <File>event.target.files[0];
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
	onSubmit() {
		console.log("Submited");
		console.log(this.editPage.value);
		if(this.editPage.invalid){
			this.invalidForm = true
			this.message='Check Requried Inputs !' 
			this.typeMessage="danger"
			this.snackbar.show()

		}else{
         

		
		this.pageServ.updatePage(this.editPage.value, this.object.id).subscribe(page => this.pages.patch(page));

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

	private moduleNameLabel(item: any) {

		return item.placeholder;
	}


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
		const modulesArray: any[] = [];
		const displaysArray: any[] = [];
		
		this.selectedModules.forEach((item, index) => {
		  if (item.type === 'module') {
			modulesArray.push(new FormGroup({
			  id: new FormControl(item.id),
			  placeholder: new FormControl(item.placeholder),
			  priority: new FormControl(index + 1)
			}));
		  } else if (item.type === 'display') {
			displaysArray.push(new FormGroup({
			  id: new FormControl(item.id),
			  placeholder: new FormControl(item.placeholder),
			  priority: new FormControl(index + 1)
			}));
		  }
		});
		
		this.editPage.setControl('modules', new FormArray(modulesArray));
		this.editPage.setControl('page_displays', new FormArray(displaysArray));
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