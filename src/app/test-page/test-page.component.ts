import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import {TestServiceService} from 'src/app/test-service.service';
import {coerceStringArray} from "@angular/cdk/coercion";
interface ImageResponse {
  image_name: string;
}

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements OnInit {
  imageForm!: FormGroup;
  fileToUpload: File | null = null;
  imageDisplay: any;
  image2!:File ;

  constructor(private formBuilder: FormBuilder, private testServiceService:TestServiceService) { }

  ngOnInit(): void {
    this.imageForm = this.formBuilder.group({
      image: [''],
    });
  }

  onfileChange($event: any): void {
    const file = ($event.target as HTMLInputElement).files![0];
    console.log(file);
    if(file){
      console.log("the file is a file"+ file);
      this.imageDisplay = file;
      // this.imageForm.patchValue({image:file});
      // this.imageForm.patchValue({image:file});
      // this.imageForm.get('image')?.updateValueAndValidity();

      // const fileReader = new FileReader();
      // fileReader.onload = ()=>{
      //   this.imageDisplay = fileReader.result;
      // console.log(this.imageDisplay);
      // };

      // fileReader.readAsDataURL(file);
    }

  }

  // onImageUpload(event:any) {
  //
  // }

  url = 'http://localhost:8000/api/test/upload'
  onSubmit(): void {
    // console.log(this.fileToUpload);
    const productFormData = new FormData();
    // Object.keys(this.imageForm).map((key) => {
    //   console.log(key);
    //   console.log(this.imageForm["value"]);
    //   // console.log(this.imageForm[key].value);
    //   // console.log(this.imageForm[key].value);
    //
    // });
    productFormData.append('image', this.imageDisplay);

      this.testServiceService.createProduct(productFormData).subscribe(
        response => {

          console.log('Success:', response);
          // Handle success response
        },
        error => {
          console.error('Error:', error);
          // Handle error response
        }
      );
    }

  onSubmit2() {

    if (this.image2) {
      console.log(this.image2);
      const formData = new FormData();
      formData.append('image', this.image2);
      // console.log(formData["value"]);
      this.testServiceService.createProduct(formData).subscribe(
        response => {

          console.log('Success:', response);
          // Handle success response
        }, error => {
          console.error('Error:', error);
          // Handle error response
        }
      );
    }
  }




// Here you can make an HTTP request to send the form data to the server
// For example:
// this.http.post('/api/upload', formData).subscribe(response => {
// console.log('Image uploaded successfully');
// });
}
