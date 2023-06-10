import {Component, ElementRef, Input, OnInit, ViewChild, Renderer2} from '@angular/core';
import {ButtonComponent} from '@syncfusion/ej2-angular-buttons';
import {TabComponent} from '@syncfusion/ej2-angular-navigations';
import {FormBuilder, FormGroup, NgForm} from "@angular/forms";
import {Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

interface modifiedFormValues {
  // "placeholder":"aaaa",
  // "tags":"bbbb",
  // "reference_name":"ref",
  // "json":{
  //   "x":"x",
  //   "y":"y"
  // },
  // "css":"csss",
  // "custom_css":"custom_csss"
  placeholder: string;
  tags: string;
  reference_name: string;
  json: {
  }
  css: string;
  custom_css: string;

}

@Component({
  selector: 'app-class-builder-main',
  templateUrl: './class-builder-main.component.html',
  styleUrls: ['./class-builder-main.component.css']
})
export class ClassBuilderMainComponent implements OnInit {
  active = 1;
  title = 'Class Builder';
  public classPlaceholder: string = '';
  public secondaryName: string = '';
  public tags: string = '';
  public selectedTags: string[] = [];
  public cssProperties: string[] = [];
  public styles: string = '';

  form!: FormGroup;

  // Define the classes array
  classes: { className: string, secondaryName: string }[] = [{
    className: 'Class 1',
    secondaryName: 'Secondary Name 1'
  }, {className: 'Class 2', secondaryName: 'Secondary Name 2'}, {
    className: 'Class 3',
    secondaryName: 'Secondary Name 3'
  }];

  @ViewChild('tabs') tabs: any;

  addCssProperty(property: string) {
    if (property && !this.cssProperties.includes(property)) {
      this.cssProperties.push(property);
    }
  }

  removeCssProperty(property: string) {
    const index = this.cssProperties.indexOf(property);
    if (index !== -1) {
      this.cssProperties.splice(index, 1);

    }
  }

  @ViewChild('tabObj', {static: true}) tabObj!: TabComponent;

  public isBool: boolean = false;
  // Mapping Tab items Header property
  SampleText: string = '';
  myData = [];



  deleteItem(index: number) {
    this.classes.splice(index, 1); // Remove the item at the given index from the array
  }

  url = 'http://localhost:8000/api/cssClass'
  constructor(private router: Router, private renderer: Renderer2 , private http : HttpClient, private formBuilder: FormBuilder) {
  }

  private cssClassform(modifiedFormValues: modifiedFormValues, url: string): Observable<any> {
    return this.http.post(url, modifiedFormValues);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      placeholder: [''],
      tags: [''],
      reference_name: [''],
      json: [''],
      css: [''],
      custom_css: ['']
    });
  }
  onSubmit() {
    // handle form submission
    const newClass = {
      className: this.classPlaceholder,
      secondaryName: this.secondaryName
    };
    this.tabs.printForm()
    console.log(this.formBuilder)
    const cssString = this.tabs.generateCssString(this.tabs.tabsForm, 'my-class-name');
    // this.tabs.giveMeCss(this.styles)

    this.classes.push(newClass);

    //post request for this

    // this.http.post(this.url,)

    // console.log(form.value);
    // console.log(this.myData)
    // Reset the form
    // form.reset();
  }
  editItem(index: number) {
    const selectedClass = this.classes[index];
    this.router.navigate(['/edit-class', {
      id: index,
      className: selectedClass.className,
      secondaryName: selectedClass.secondaryName
    }]);
  }



}
