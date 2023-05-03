import { Component, OnInit,ViewChild,ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validator,FormArray } from '@angular/forms';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { DualListComponent } from 'angular-dual-listbox';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class PageEditComponent implements OnInit {
  @ViewChild('f', { static: false }) editPageForm!: NgForm;
  type=['standard','content'];
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


	arrayType = [
		{ name: 'Rio Grande', detail: '(object array)', value: 'moduleName' },
	];

	Type = this.arrayType[0].value;

	private Modules: Array<any> = [
		{ key: 1, moduleName: 'Model1'},
		{ key: 2, moduleName: 'Model2' },
		{ key: 3, moduleName: 'Model3' },
		{ key: 4, moduleName: 'Model4'},
		{ key: 5, moduleName: 'Model5'},
		{ key: 6, moduleName: 'Model6'}
		
	];
	selectedModulesData: { key: number, moduleName: string }[] = [];

	  httpClient!: HttpClient;

	  // Add the HttpClient module to the constructor parameters
	  constructor(/*private http: HttpClient*/) {
		//this.http=http;
	  }

  ngOnInit() {
    this.doReset();
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
  console.log(this.editPageForm);
  const formData = new FormData();
  formData.append('header_image_url', this.selectedFile1, this.selectedFile1.name);
  // Add other form data to formData as needed...

  // Submit the form data to your API using HttpClient
  this.httpClient.post('LocalHost:8000/api/testPage', formData).subscribe(
	(response) => console.log(response),
	(error) => console.log(error)
  );
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
		return item.moduleName ;
	}

	private useModules() {
		this.key = 'key';
		this.display = this.moduleNameLabel;
		this.keepSorted = true;
		this.source = this.sourceModules;
		this.confirmed = this.confirmedModules;
	}


	swapSource() {
		switch (this.Type) {
		case this.arrayType[0].value:
			this.useModules();
			break;
		
		}
	}

	doReset() {
		this.sourceModules = JSON.parse(JSON.stringify(this.Modules));

		this.confirmedModules = new Array<any>();
		
		// Preconfirm some items.
		this.confirmedModules.push( this.Modules[31] );
		

		switch (this.Type) {
		case this.arrayType[0].value:
			this.useModules();
			break;
		
		}
	}

	doDelete() {
		if (this.source.length > 0) {
			this.source.splice(0, 1);
		}
	}

	doCreate() {
    if (typeof this.source[0] === 'object') {
        const o = {} as any; // use type assertion here
        o[this.key] = this.source.length + 1;
        o[this.display] = this.userAdd;
        this.source.push(o);
    } else {
        this.source.push(this.userAdd);
    }
    this.userAdd = '';
}


	doAdd() {
		for (let i = 0, len = this.source.length; i < len; i += 1) {
			const o = this.source[i];
			const found = this.confirmed.find( (e: any) => e === o );
			if (!found) {
				this.confirmed.push(o);
				break;
			}
		}	
	

	}

	doRemove() {
		if (this.confirmed.length > 0) {
			this.confirmed.splice(0, 1);
		}
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
	this.selectedModulesData = this.selectedModules.slice();


}

}

