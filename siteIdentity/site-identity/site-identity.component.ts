import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {tsCastToAny} from "@angular/compiler-cli/src/ngtsc/typecheck/src/ts_util";

@Component({
  selector: 'app-site-identity',
  templateUrl: './site-identity.component.html',
  styleUrls: ['./site-identity.component.css']
})
export class SiteIdentityComponent implements OnInit {
  universityIdentityForm: FormGroup;
  // data = [
  //   { title: 'Row 1', content: 'Content 1', expanded: false },
  //   { title: 'Row 2', content: 'Content 2', expanded: false },
  //   { title: 'Row 3', content: 'Content 3', expanded: false }
  // ];
  row1Expanded: boolean = false;
  rowAccounts: boolean = false;
  rowContact: boolean = false;
  rowAbout: boolean = false;
  rowImages: boolean = false;

  constructor(private fb: FormBuilder) {
    this.universityIdentityForm = this.fb.group({
      defaultCoverLogo: [''],
      defaultCoverLogoVertical: [''],
      defaultHeaderImage: [''],
      defaultBrowserIcon: [''],
      secondaryLogo: [''],
      backgroundImage: [''],
      universityName: [''],
      shortDescription: [''],
      mainSlogan: [''],
      universityAddress: [''],
      universityEmail: [''],
      mainPhoneNumber: [''],
      universityLandline: [''],
      facebookLink: [''],
      twitterLink: [''],
      instagramLink: [''],
      otherLink: [''],
    });
  }

  // const myMap = new Map();



  _defaultCoverLogo: string = '';
  _defaultCoverLogoUrl: string = '';
  _defaultCoverLogoVertical: string = '';
  _defaultCoverLogoVerticalUrl: string = '';
  _defaultHeaderImage: string = '';
  _defaultHeaderImageUrl: string = '';
  _defaultBrowserIcon: string = '';
  _defaultBrowserIconUrl: string = '';
  _secondaryLogo: string = '';
  _secondaryLogoUrl: string = '';
  _backgroundImage: string = '';
  _backgroundImageUrl: string = '';

  onFileChange(event: any, field: string) {
    if (event.target.files.length > 0) {
      const fd = new FormData();
      const file = event.target.files[0];
      const reader = new FileReader();
      const formControl = this.universityIdentityForm.get(field);
      if (formControl) {
        formControl.setValue(file);
        switch (field) {
          case 'defaultCoverLogo':
            this._defaultCoverLogo = file.name.toString();
            break;
          case 'defaultCoverLogoVertical':
            this._defaultCoverLogoVertical = file.name.toString();
            break;
          case 'defaultHeaderImage':
            this._defaultHeaderImage = file.name.toString();
            break;
          case 'defaultBrowserIcon':
            this._defaultBrowserIcon = file.name.toString();
            break;
          case 'secondaryLogo':
            this._secondaryLogo = file.name.toString();
            break;
          case 'backgroundImage':
            this._backgroundImage = file.name.toString();
            break;
        }

      }
    }
  }

  ngOnInit(): void {
    this.universityIdentityForm = this.fb.group({
      universityImages: this.fb.group({
        defaultCoverLogo: ['', Validators.required],
        defaultCoverLogoVertical: ['', Validators.required],
        defaultHeaderImage: ['', Validators.required],
        defaultBrowserIcon: ['', Validators.required],
        secondaryLogo: ['', Validators.required],
        backgroundImage: ['', Validators.required],
      }),
      universityAbout: this.fb.group({
        universityName: ['', Validators.required],
        shortDescription: ['', Validators.required],
        mainSlogan: ['', Validators.required],
      }),
      universityContact: this.fb.group({
        universityAddress: ['', Validators.required],
        universityEmail: ['', Validators.required],
        mainPhoneNumber: ['', Validators.required],
        universityLandline: ['', Validators.required],
      }),
      universityAccounts: this.fb.group({
        facebookLink: ['', Validators.required],
        twitterLink: ['', Validators.required],
        instagramLink: ['', Validators.required],
        otherLink: ['', Validators.required],

      }),
    });
  }
  selectedFile: any = null;
  fileUrl:any  = null;
  getBase64(file :any) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const imageUrl = reader.result as string;
      console.log(imageUrl); // this will log the URL of the uploaded image
    };
    reader.onerror = (error) => {
      console.log('Error: ', error);
    };
  }

  // onFileSelected(event) {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     this.imageUrl = reader.result as string;
  //   };
  //   reader.readAsDataURL(file);
  // }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    // this.fileUrl = this.getBase64(this.selectedFile);
    this.selectedFile=file;
    // console.log(event.detail.fieldName);
    console.log("event.target.name");

    const reader = new FileReader();
    reader.onload = () => {
      this.fileUrl = reader.result as string;
    };
    reader.readAsDataURL(file);
    event.preventDefault(); // prevent the form from submitting
    if (event.detail.name === 'defaultCoverLogo') {
      this._defaultCoverLogo = file.name.toString();
      this._defaultCoverLogoUrl = this.fileUrl;
      console.log(this._defaultCoverLogoUrl);
    }
    else if(event.target.name === 'defaultCoverLogoVertical') {
      this._defaultCoverLogoVertical = file.name.toString();
      this._defaultCoverLogoVerticalUrl = this.fileUrl;
      console.log(this._defaultCoverLogoVerticalUrl);
    }else if(event.target.name === 'defaultHeaderImage') {
      this._defaultHeaderImage = file.name.toString();
      this._defaultHeaderImageUrl = this.fileUrl;
      console.log(this._defaultHeaderImageUrl);
    }else if(event.target.name === 'defaultBrowserIcon') {
      this._defaultBrowserIcon = file.name.toString();
      this._defaultBrowserIconUrl = this.fileUrl;
      console.log(this._defaultBrowserIconUrl);
    }else if(event.target.name === 'secondaryLogo') {
      this._secondaryLogo = file.name.toString();
      this._secondaryLogoUrl = this.fileUrl;
      console.log(this._secondaryLogoUrl);
    }
    else if(event.target.name === 'backgroundImage') {
      this._backgroundImage = file.name.toString();
      this._backgroundImageUrl = this.fileUrl;
      console.log(this._backgroundImageUrl);
    }
  }

  onUpload() {
    const formData = new FormData();
    formData.append('defaultCoverLogo', this.universityIdentityForm.get('defaultCoverLogo')?.value);
    formData.append('defaultCoverLogoVertical', this.universityIdentityForm.get('defaultCoverLogoVertical')?.value);
    formData.append('defaultHeaderImage', this.universityIdentityForm.get('defaultHeaderImage')?.value);
    formData.append('defaultBrowserIcon', this.universityIdentityForm.get('defaultBrowserIcon')?.value);
    formData.append('secondaryLogo', this.universityIdentityForm.get('secondaryLogo')?.value);
    formData.append('backgroundImage', this.universityIdentityForm.get('backgroundImage')?.value);
    console.log(formData);
  }
  // onSubmit() {
  //   const formData = new FormData();
  //   const formValue = this.universityIdentityForm.value;
  //   for (const controlName of Object.keys(formValue)) {
  //     const controlValue = formValue[controlName];
  //
  //     if (controlValue instanceof FileList) {
  //       for (let i = 0; i < controlValue.length; i++) {
  //         const file = controlValue.item(i);
  //         formData.append(controlName, file , file.name);
  //       }
  //     } else {
  //       formData.append(controlName, controlValue);
  //     }
  //   // send the formData to the server using an HTTP request
  // }

  // onSubmit(event: any) {
  //   // console.log(this.universityIdentityForm.value);
  //   const formData = new FormData();
  //   formData.append('myFile', this.selectedFile, this.selectedFile.name);
  //
  //   // this.http.post('/api/upload', formData).subscribe(response => {
  //     console.log('Upload successful!' , this.selectedFile);
  //     console.log('Upload successful!' , this.fileUrl.url);
  //
  //   console.log(this.universityIdentityForm.value);
  //
  // }

  onSubmit(event: any) {
    const formData = new FormData();

    const imagesForm = this.universityIdentityForm.get('universityImages') as FormGroup;
    for (const controlName of Object.keys(imagesForm.controls)) {
      const controlValue = imagesForm.get(controlName)?.value;
      if (controlValue instanceof FileList) {
        for (let i = 0; i < controlValue.length; i++) {
          const file = controlValue.item(i);
          if (file != null) {
            formData.append(controlName, file, file.name);
          }
        }
      } else {
        formData.append(controlName, controlValue);
      }
    }

    // send the formData to the server using an HTTP request
    console.log(this.universityIdentityForm.value);
  }


  // onUpload() {
  //
  // }
}
