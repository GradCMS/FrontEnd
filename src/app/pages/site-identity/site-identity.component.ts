import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-site-identity',
  templateUrl: './site-identity.component.html',
  styleUrls: ['./site-identity.component.css']
})
export class SiteIdentityComponent implements OnInit {
  university!: FormGroup;
  contactusForm!: FormGroup;
  socialMediaForm!: FormGroup;
  row1Expanded: boolean = false;
  rowAccounts: boolean = false;
  rowContact: boolean = false;
  rowAbout: boolean = false;
  rowImages: boolean = false;
  constructor(private fb: FormBuilder) {

  }
  ngOnInit(): void {

    this.university = this.fb.group({
      universityImages: this.fb.group({
        defaultCoverLogo: ['', Validators.required],
        defaultCoverLogoVertical: ['', Validators.required],
        defaultHeaderImage: ['', Validators.required],
        defaultBrowserIcon: ['', Validators.required],
        secondaryLogo: ['', Validators.required],
        backgroundImage: ['', Validators.required],
      }),
      aboutUniversity: this.fb.group({
        universityName: ['', Validators.required],
        shortDescription: ['', Validators.required],
        mainSlogan: ['', Validators.required],
      }),
    })
    this.contactusForm =this.fb.group(
    {
        universityAddress: ['', Validators.required],
        universityEmail: ['', Validators.required],
        mainPhoneNumber: ['', Validators.required],
        universityLandline: ['', Validators.required],
      })
    this.socialMediaForm = this.fb.group(
    {
        facebookLink: ['', Validators.required],
        twitterLink: ['', Validators.required],
        instagramLink: ['', Validators.required],
        otherLink: ['', Validators.required],

      })
  }

  fileUrls: string[] = ['', '', '', '', '', ''];

  onFileSelected(event: any, formControlName: string, index: number) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      switch (formControlName) {
        case 'defaultCoverLogo':
          this.fileUrls[0] = reader.result as string;
          break;
        case 'defaultCoverLogoVertical':
          this.fileUrls[1] = reader.result as string;
          break;
        case 'defaultHeaderImage':
          this.fileUrls[2] = reader.result as string;
          break;
        case 'defaultBrowserIcon':
          this.fileUrls[3] = reader.result as string;
          break;
        case 'secondaryLogo':
          this.fileUrls[4] = reader.result as string;
          break;
        case 'backgroundImage':
          this.fileUrls[5] = reader.result as string;
          break;
        default:
          break;
      }
    };
  }
  onSubmit(event: any) {
    // send the formData to the server using an HTTP request
    console.log(this.university.value);
    const formValues = {
      university: this.university.value,
      contactusForm: this.contactusForm.value,
      socialMediaForm: this.socialMediaForm.value,
    };
    console.log(formValues);
  }
}
