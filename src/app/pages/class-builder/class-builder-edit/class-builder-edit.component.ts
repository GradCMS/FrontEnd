import {Component, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TabComponent} from "@syncfusion/ej2-angular-navigations";
import {ActivatedRoute, Router} from "@angular/router";
import {ClassbuilderService} from "../../../sharedServices/classbuilder/classbuilder.service";

@Component({
  selector: 'app-class-builder-edit',
  templateUrl: './class-builder-edit.component.html',
  styleUrls: ['./class-builder-edit.component.css']
})
export class ClassBuilderEditComponent implements OnInit {

  active = 1;
  public classPlaceholder: string = '';
  public secondaryName: string = '';
  public tags: string = '';
  public selectedTags: string[] = [];
  public styles: string = '';

  form!: FormGroup;

  // Define the classes array
  classes: { className: string, secondaryName: string, id: number }[] = [];

  @ViewChild('tabs') tabs: any;
  @ViewChild('tabObj', {static: true}) tabObj!: TabComponent;

  // Mapping Tab items Header property
  SampleText: string = '';
  myData: any = [];
  itemId!: number;

  url = 'http://localhost:8000/api/cssClass'

  constructor(private router: Router, private renderer: Renderer2, private formBuilder: FormBuilder, private classBuilderService: ClassbuilderService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      placeholder: ['', Validators.required],
      reference_name: ['', Validators.required],
    });
    //print all the data from the database into the table
    this.route.params.subscribe(params => {
      this.itemId = params['id'];
    });
    console.log(this.itemId)
    this.editItem(this.itemId, this.itemId)
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
      this.classBuilderService.updateClass(this.itemId, requestBody).subscribe((data: any) => {
        console.log(data);
        this.form.reset()
        //make router navigate back to the previous page
        this.router.navigate(['ClassBuilder']);
      }, error => {
        console.log(error);
      });
    }
  }

  editItem(index: number, id: number) {
    this.classBuilderService.editClass(id).subscribe((data: any) => {
      console.log(data)
      this.form.setValue({
        placeholder: data.CssClass.placeholder,
        reference_name: data.CssClass.reference_name
      })
      console.log(this.tabs.css)
    })
  }
}
