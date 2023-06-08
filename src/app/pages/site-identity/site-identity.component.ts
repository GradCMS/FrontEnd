import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

interface modifiedFormValues {
  contact_us: string;
  social_media: string;
  about: string;
  images: string;
}

@Component({
  selector: 'app-site-identity',
  templateUrl: './site-identity.component.html',
  styleUrls: ['./site-identity.component.css']
})


export class SiteIdentityComponent implements OnInit {
  university!: FormGroup;
  contactusForm!: FormGroup;
  socialMediaForm!: FormGroup;

  about: any;
  field_address: any;
  field_email: any;
  field_phone: any;
  field_landline: any;
  field_twitter: any;
  field_instagram: any;
  field_linkedin: any;
  field_facebook: any;
  field_other: any;
  field_university_name: any;
  field_short_description: any;
  field_main_slogan: any;
  getrequest: any;

  row1Expanded: boolean = false;
  rowAccounts: boolean = false;
  rowContact: boolean = false;
  rowAbout: boolean = false;
  rowImages: boolean = false;
  constructor(private fb: FormBuilder , private http : HttpClient ,private toastr: ToastrService , private router: Router) {

  }
  ngOnInit(): void {

    const token = sessionStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/login']); // Redirect to the login page if token doesn't exist
    }

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

    this.http.get('http://localhost:8000/api/siteIdentity/2').subscribe(
      (response) => {
        console.log(response);
        this.getrequest = response.valueOf();
        console.log(this.getrequest.Site_identity.contact_us.universityLandline);
        // const parsedResponse = JSON.parse(JSON.stringify(response));
        this.field_landline = this.getrequest.Site_identity.contact_us.universityLandline;
        this.field_address = this.getrequest.Site_identity.contact_us.universityAddress;
        this.field_email = this.getrequest.Site_identity.contact_us.universityEmail;
        this.field_phone = this.getrequest.Site_identity.contact_us.mainPhoneNumber;
        this.field_twitter = this.getrequest.Site_identity.social_media.twitterLink;
        this.field_facebook = this.getrequest.Site_identity.social_media.facebookLink;
        this.field_instagram = this.getrequest.Site_identity.social_media.instagramLink;
        this.field_linkedin = this.getrequest.Site_identity.social_media.otherLink;
        this.field_university_name = this.getrequest.Site_identity.about.universityName;
        this.field_short_description = this.getrequest.Site_identity.about.shortDescription;
        this.field_main_slogan = this.getrequest.Site_identity.about.mainSlogan;
        // this.about = parsedResponse.about;
        // console.log(parsedResponse);
        // this.field_address = this.getrequest.data.field_address;
        // this.field_email = this.getrequest.data.field_email;
        // this.field_phone = this.getrequest.data.field_phone;
        // this.field_landline = this.getrequest.contact_us.universityLandline.value;
        // console.log(this.field_landline);

      },
      (error) => {
        console.log(error);

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





  private submitForm(modifiedFormValues: modifiedFormValues, url: string): Observable<any> {
    return this.http.post(url, modifiedFormValues);
  }

  onSubmit(event: any) {
    // send the formData to the server using an HTTP request
    console.log(this.university.value);
    const formValues = {
      university: this.university.value,
      contactusForm: this.contactusForm.value,
      socialMediaForm: this.socialMediaForm.value,
    };
    const modifiedFormValues = {
      contact_us: "{mainPhoneNumber:" + formValues.contactusForm.mainPhoneNumber
        + ",universityAddress:" + formValues.university.aboutUniversity.universityAddress
        + ",universityEmail:" + formValues.university.aboutUniversity.universityEmail
        + ",universityLandline:" + formValues.contactusForm.universityLandline
        + "}",
      social_media: "{facebookLink:" + formValues.socialMediaForm.facebookLink
        + ",instagramLink:" + formValues.socialMediaForm.instagramLink
        + ",twitterLink:" + formValues.socialMediaForm.twitterLink
        + "}",
      about: "{mainSlogan:" + formValues.university.aboutUniversity.mainSlogan
        + ",shortDescription:" + formValues.university.aboutUniversity.shortDescription
        + ",universityName:" + formValues.university.aboutUniversity.universityName
        + "}",
      images: "{defaultHeaderImage:" + formValues.university.universityImages.defaultHeaderImage
        + ",backgroundImage:" + formValues.university.universityImages.backgroundImage
        + ",defaultBrowserIcon:" + formValues.university.universityImages.defaultBrowserIcon
        + ",defaultCoverLogo:" + formValues.university.universityImages.defaultCoverLogo
        + "}",
    };

    const requestBody: modifiedFormValues = {
      contact_us: modifiedFormValues.contact_us,
      social_media: modifiedFormValues.social_media,
      about: modifiedFormValues.about,
      images: modifiedFormValues.images,
    };

// Make an HTTP POST request with the modified form values
    const url = 'http://localhost:8000/api/siteIdentity';
    this.submitForm(requestBody, url).subscribe(
      response => {
        console.log('Success:', response);
        this.toastr.success('Form submitted successfully!', 'Success');
      },
      error => {
        console.error('Error:', error);
      }
    );
    console.log(modifiedFormValues);
  }

}
