import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {SnackbarComponent} from "../../snackbar/snackbar.component";
import {SiteIdentityService} from "../../sharedServices/siteIdentity/site-identity.service";

interface modifiedFormValues {
  contact_us: string;
  social_media: string;
  about: string;
  // images: {
  //   defaultHeaderImage: File;
  //   backgroundImage: File;
  //   defaultBrowserIcon: File;
  //   defaultCoverLogo: File;
  // };
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

  @ViewChild('snackbar') private snackbar!: SnackbarComponent;

  message: string = '';
  type: string = '';

  about: any;

  getrequest: any;

  row1Expanded: boolean = false;
  rowAccounts: boolean = false;
  rowContact: boolean = false;
  rowAbout: boolean = false;
  rowImages: boolean = false;

  // phone number validator
  phoneNumberValidator(control: FormControl): { [key: string]: any } | null {
    const phoneNumberPattern = /^\+\d{12}$/;
    if (!phoneNumberPattern.test(control.value)) {
      return {invalidPhoneNumber: true};
    }
    return null;
  }

  landLineValidator(control: FormControl): { [key: string]: any } | null {
    const numberPattern = /^\d{10}$/;
    if (!numberPattern.test(control.value)) {
      return {invalidNumber: true};
    }
    return null;
  }

  urlValidator(control: FormControl): { [key: string]: any } | null {
    const urlPattern = /^(http|https):\/\/[^ "]+$/;
    if (!urlPattern.test(control.value)) {
      return {invalidUrl: true};
    }
    return null;
  }

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private siteIdentityService: SiteIdentityService) {

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
        secondaryLogo: [''],
        backgroundImage: [''],
      }),
      aboutUniversity: this.fb.group({
        universityName: ['', Validators.required],
        shortDescription: ['', Validators.required],
        mainSlogan: ['', Validators.required],
      }),
    })
    this.contactusForm = this.fb.group(
      {
        universityAddress: ['', Validators.required],
        universityEmail: ['', [Validators.required, Validators.email]],
        mainPhoneNumber: ['', [Validators.required, this.phoneNumberValidator]],
        universityLandline: ['', [Validators.required, this.landLineValidator]],
      })
    this.socialMediaForm = this.fb.group(
      {
        facebookLink: ['', [this.urlValidator]],
        twitterLink: ['', [this.urlValidator]],
        instagramLink: ['', [this.urlValidator]],
        otherLink: ['', [this.urlValidator]],
      })
    this.getDataIntoForm();
  }

  getDataIntoForm() {
    const siteIdentity = {
      about: {
        mainSlogan: '',
        shortDescription: '',
        universityName: '',

      },
      contact_us: {
        mainPhoneNumber: '',
        universityAddress: '',
        universityEmail: '',
        universityLandline: '',
      },
      images: {
        defaultCoverLogo: '',
        defaultCoverLogoVertical: '',
        defaultHeaderImage: '',
        defaultBrowserIcon: '',
        secondaryLogo: '',
        backgroundImage: '',
      },
      social_media: {
        facebookLink: '',
        instagramLink: '',
        twitterLink: '',
        otherLink: '',
      },
    };
    this.siteIdentityService.getSiteIdentity().subscribe(
      (response) => {
        console.log(response);
        // console.log((JSON.parse(response)));
        this.getrequest = response;
        siteIdentity.about.universityName = this.getrequest.Site_identity.about.universityName;
        siteIdentity.about.shortDescription = this.getrequest.Site_identity.about.shortDescription;
        siteIdentity.about.mainSlogan = this.getrequest.Site_identity.about.mainSlogan;
        siteIdentity.contact_us.universityAddress = this.getrequest.Site_identity.contact_us.universityAddress;
        siteIdentity.contact_us.universityEmail = this.getrequest.Site_identity.contact_us.universityEmail;
        siteIdentity.contact_us.mainPhoneNumber = this.getrequest.Site_identity.contact_us.mainPhoneNumber;
        siteIdentity.contact_us.universityLandline = this.getrequest.Site_identity.contact_us.universityLandline;
        siteIdentity.images.defaultCoverLogo = this.getrequest.Site_identity.images.defaultCoverLogo;
        siteIdentity.images.defaultCoverLogoVertical = this.getrequest.Site_identity.images.defaultCoverLogoVertical;
        siteIdentity.images.defaultHeaderImage = this.getrequest.Site_identity.images.defaultHeaderImage;
        siteIdentity.images.defaultBrowserIcon = this.getrequest.Site_identity.images.defaultBrowserIcon;
        siteIdentity.images.secondaryLogo = this.getrequest.Site_identity.images.secondaryLogo;
        siteIdentity.images.backgroundImage = this.getrequest.Site_identity.images.backgroundImage;
        siteIdentity.social_media.facebookLink = this.getrequest.Site_identity.social_media.facebookLink;
        siteIdentity.social_media.instagramLink = this.getrequest.Site_identity.social_media.instagramLink;
        siteIdentity.social_media.twitterLink = this.getrequest.Site_identity.social_media.twitterLink;
        siteIdentity.social_media.otherLink = this.getrequest.Site_identity.social_media.otherLink;
        console.log(this.getrequest.Site_identity.contact_us.mainNumber);
        this.contactusForm.controls['universityAddress'].setValue(siteIdentity.contact_us.universityAddress);
        this.contactusForm.controls['universityEmail'].setValue(siteIdentity.contact_us.universityEmail);
        this.contactusForm.controls['mainPhoneNumber'].setValue(siteIdentity.contact_us.mainPhoneNumber);
        this.contactusForm.controls['universityLandline'].setValue(siteIdentity.contact_us.universityLandline);
        this.socialMediaForm.controls['facebookLink'].setValue(siteIdentity.social_media.facebookLink);
        this.socialMediaForm.controls['twitterLink'].setValue(siteIdentity.social_media.twitterLink);
        this.socialMediaForm.controls['instagramLink'].setValue(siteIdentity.social_media.instagramLink);
        this.socialMediaForm.controls['otherLink'].setValue(siteIdentity.social_media.otherLink);
        this.university.controls['aboutUniversity'].patchValue(
          {
            universityName: siteIdentity.about.universityName,
            shortDescription: siteIdentity.about.shortDescription,
            mainSlogan: siteIdentity.about.mainSlogan,
          });
        this.university.controls['universityImages'].patchValue(
          {
            defaultCoverLogo: siteIdentity.images.defaultCoverLogo,
            defaultCoverLogoVertical: siteIdentity.images.defaultCoverLogoVertical,
            defaultHeaderImage: siteIdentity.images.defaultHeaderImage,
            defaultBrowserIcon: siteIdentity.images.defaultBrowserIcon,
            secondaryLogo: siteIdentity.images.secondaryLogo,
            backgroundImage: siteIdentity.images.backgroundImage,
          });
      }, error => {
        console.log(error);
      })

  }

  images: File[] = [];

  fileUrls: string[] = ['', '', '', '', '', ''];

  onFileSelected(event: any, formControlName: string, index: number) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      switch (formControlName) {
        case 'defaultCoverLogo':
          this.fileUrls[0] = reader.result as string;
          this.images[0] = file;
          break;
        case 'defaultCoverLogoVertical':
          this.fileUrls[1] = reader.result as string;
          this.images[1] = file;
          break;
        case 'defaultHeaderImage':
          this.fileUrls[2] = reader.result as string;
          this.images[2] = file;
          break;
        case 'defaultBrowserIcon':
          this.fileUrls[3] = reader.result as string;
          this.images[3] = file;
          break;
        case 'secondaryLogo':
          this.fileUrls[4] = reader.result as string;
          this.images[4] = file;
          break;
        case 'backgroundImage':
          this.fileUrls[5] = reader.result as string;
          this.images[5] = file;
          break;
        default:
          break;
      }
    };
  }


  onSubmit(event: any) {
    // send the formData to the server using an HTTP request
    this.images.forEach((image) => {
      if (image) {
        // this.formData.append('image' + index, image, image.name);
        console.log(image);
      }
    });
    console.log(this.university.value);
    const formValues = {
      university: this.university.value,
      contactusForm: this.contactusForm.value,
      socialMediaForm: this.socialMediaForm.value,
    };
    const modifiedFormValues = {
      contact_us: "{mainPhoneNumber:" + formValues.contactusForm.mainPhoneNumber
        + ",universityAddress:" + formValues.contactusForm.universityAddress
        + ",universityEmail:" + formValues.contactusForm.universityEmail
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
    };

    const formData = new FormData();
    formData.append('contact_us', JSON.stringify(modifiedFormValues.contact_us));
    if (this.contactusForm.value.mainPhoneNumber) {
      formData.append('contact_us[mainPhoneNumber]', this.contactusForm.value.mainPhoneNumber);
    }
    if (this.contactusForm.value.universityAddress) {
      formData.append('contact_us[universityAddress]', this.contactusForm.value.universityAddress);
    }
    if (this.contactusForm.value.universityEmail) {
      formData.append('contact_us[universityEmail]', this.contactusForm.value.universityEmail);
    }
    if (this.contactusForm.value.universityLandline) {
      formData.append('contact_us[universityLandline]', this.contactusForm.value.universityLandline);
    }
    if (this.socialMediaForm.value.facebookLink) {
      formData.append('social_media[facebookLink]', this.socialMediaForm.value.facebookLink);
    }
    if (this.socialMediaForm.value.instagramLink) {
      formData.append('social_media[instagramLink]', this.socialMediaForm.value.instagramLink);
    }
    if (this.socialMediaForm.value.twitterLink) {
      formData.append('social_media[twitterLink]', this.socialMediaForm.value.twitterLink);
    }
    if (this.university.value.aboutUniversity.mainSlogan) {
      formData.append('about[mainSlogan]', this.university.value.aboutUniversity.mainSlogan);
    }
    if (this.university.value.aboutUniversity.shortDescription) {
      formData.append('about[shortDescription]', this.university.value.aboutUniversity.shortDescription);
    }
    if (this.university.value.aboutUniversity.universityName) {
      formData.append('about[universityName]', this.university.value.aboutUniversity.universityName);
    }
    if (this.socialMediaForm.value.facebookLink) {
      formData.append('social_media[facebookLink]', this.socialMediaForm.value.facebookLink);
    }
    if (this.socialMediaForm.value.instagramLink) {
      formData.append('social_media[instagramLink]', this.socialMediaForm.value.instagramLink);
    }
    if (this.images[0]) {
      formData.append('images[defaultCoverLogo]', this.images[0]);
    }
    if (this.images[1]) {
      formData.append('images[defaultCoverLogoVertical]', this.images[1]);
    }
    if (this.images[2]) {
      formData.append('images[defaultHeaderImage]', this.images[2]);
    }
    if (this.images[3]) {
      formData.append('images[defaultBrowserIcon]', this.images[3]);
    }
    if (this.images[4]) {
      formData.append('images[secondaryLogo]', this.images[4]);
    }
    if (this.images[5]) {
      formData.append('images[backgroundImage]', this.images[5]);
    }
    console.log('The sent is:', formData);
    this.siteIdentityService.createSiteIdentity(formData).subscribe(
      response => {
        console.log('Success:', response);

      }, error => {
        console.log(error);

      });

    console.log(modifiedFormValues);
  }
}
