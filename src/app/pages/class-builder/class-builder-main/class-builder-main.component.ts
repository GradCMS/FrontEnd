import {Component, ElementRef, Input, OnInit, ViewChild, Renderer2} from '@angular/core';
import {TabComponent} from '@syncfusion/ej2-angular-navigations';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {Router} from '@angular/router';
import {ClassbuilderService} from "../../../sharedServices/classbuilder/classbuilder.service";
import { SnackbarComponent } from 'src/app/shared/snackbar/snackbar.component';


@Component({
  selector: 'app-class-builder-main',
  templateUrl: './class-builder-main.component.html',
  styleUrls: ['./class-builder-main.component.css']
})
export class ClassBuilderMainComponent implements OnInit {
  @ViewChild('snackbar') private snackbar!: SnackbarComponent;
  message!: string;
  type!: string;
  active = 1;
  public classPlaceholder: string = '';
  public secondaryName: string = '';
  public tags: string = '';
  public selectedTags: string[] = [];
  public cssProperties: string[] = [];
  public styles: string = '';

  form!: FormGroup;

  // Define the classes array
  classes: { className: string, secondaryName: string, id: number }[] = [];

  @ViewChild('tabs') tabs: any;
  @ViewChild('tabObj', {static: true}) tabObj!: TabComponent;

  // Mapping Tab items Header property
  SampleText: string = '';
  myData: any = [];


  url = 'http://localhost:8000/api/cssClass'

  constructor(private router: Router, private renderer: Renderer2, private formBuilder: FormBuilder, private classBuilderService: ClassbuilderService) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      placeholder: ['', Validators.required],
      reference_name: ['', Validators.required],
    });
    this.getItems();


  }

  // preview Variable
  previewStyle: any;

  onSubmit() {
    // handle form submission
    const newClass = {
      className: this.classPlaceholder,
      secondaryName: this.secondaryName
    };
    const css = this.tabs.printForm()
    console.log("this css is: " + css)
    const requestBody = {
      placeholder: 'aaaa',
      tags: 'bbbb',
      reference_name: 'ref',
      json: {
        x: 'x',
        y: 'y'
      },
      css: css,
      custom_css: 'custom_csss'
    };
    if (this.form.valid) {
      requestBody.placeholder = this.form.value.placeholder;
      requestBody.reference_name = this.form.value.reference_name;
      this.previewStyle = css;
      this.classBuilderService.createClass(requestBody).subscribe((data: any) => {
        console.log(data);
        this.message = `Class ${requestBody.placeholder} has been created successfully`;
        this.type = 'success';
        this.snackbar.show();
        this.form.reset()
        this.ngOnInit();
      }, error => {
        console.log(error);
      });
    }
  }

  editItem(index: number, id: number) {
    // const selectedClass = this.classes[index];
    // this.router.navigate(['/{}', {
    //   id: index,
    //   className: selectedClass.className,
    //   secondaryName: selectedClass.secondaryName
    // }]);
  }

  deleteItem(index: number, id: number) {
    this.classes.splice(index, 1); // Remove the item at the given index from the array
    this.classBuilderService.deleteClass(id);
    this.message = `Class has been deleted successfully`;
    this.type = 'success';
    this.snackbar.show();
  }

  getItems() {
    this.classBuilderService.getClasses().subscribe((data: any) => {
      this.myData = data.cssClasses;
      //console.log(this.myData)  // print all the data from the database into the console
      for (let i = 0; i < this.myData.length; i++) {
        // console.log(this.myData[i].valueOf())
        this.classes.push({
          className: this.myData[i].placeholder,
          secondaryName: this.myData[i].reference_name,
          id: this.myData[i].id
        })
      }
    });
  }
}
