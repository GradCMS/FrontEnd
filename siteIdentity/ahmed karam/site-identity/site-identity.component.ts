import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {tsCastToAny} from "@angular/compiler-cli/src/ngtsc/typecheck/src/ts_util";

@Component({
  selector: 'app-site-identity',
  templateUrl: './site-identity.component.html',
  styleUrls: ['./site-identity.component.css']
})
export class SiteIdentityComponent implements OnInit {

  row1Expanded: boolean = false;
  rowAccounts: boolean = false;
  rowContact: boolean = false;
  rowAbout: boolean = false;
  rowImages: boolean = false;

  lable1: string = "";
  lable1Url: string = "";

  lable2: string = "";
  lable2Url: string = "";

  lable3: string = "";
  lable3Url: string = "";

  lable4: string = "";
  lable4Url: string = "";

  lable5: string = "";
  lable5Url: string = "";

  lable6: string = "";
  lable6Url: string = "";

  constructor() {
  }

  // const myMap = new Map();



  onSubmit(Form: any) {
    console.log(Form);
  }
  fieldName(file: any) {
    switch (file.name) {
      case 'defaultCoverLogo': {this.lable1 = file.name; break; }
      case 'defaultCoverImageVertical': {this.lable2 = file.name; break; }
    }

  }

  onChange(event: any) {
    const file = event.target.files[0];
    console.log(file);
    var name = event.target.attributes.getNamedItem('ng-reflect-name').value;
    console.log(name)
    if (name === 'defaultCoverLogo') {
      this.lable1 = file.name;
    }else if (file.name === 'defaultCoverImageVertical') {
      this.lable2 = file.name;
      console.log("lable 2 " + this.lable2);
    }else if (file.name === 'defaultHeaderImage') {
      this.lable3 = file.name;
      console.log("lable 3 " + this.lable3);
    }else if (file.name === 'defaultBrowserIcon') {
      this.lable4 = file.name;
      console.log("lable 4 " + this.lable4);
    }else if (file.name === 'secondaryLogo') {
      this.lable5 = file.name;
      console.log("lable 5 " + this.lable5);
    } else if (file.name === 'backgroundImage') {
      this.lable6 = file.name;
      console.log("lable 6 " + this.lable6);
    }
    console.log(this.lable1 , this.lable2 , this.lable3 , this.lable4 , this.lable5 , this.lable6);
    // this.lable1= file.name;
    // const reader = new FileReader();
    // reader.onload = (event: any) => {
    //   this.lable1Url = event.target.result;
    // };
    // reader.readAsDataURL(this.selectedFile);

  }




  ngOnInit(): void {
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



}
