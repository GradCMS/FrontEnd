import {Component, OnInit, ViewChild} from '@angular/core';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { TabComponent } from '@syncfusion/ej2-angular-navigations';


@Component({
  selector: 'app-class-builder-main',
  templateUrl: './class-builder-main.component.html',
  styleUrls: ['./class-builder-main.component.css']
})
export class ClassBuilderMainComponent implements OnInit {
  active = 1;
  public classPlaceholder: string = '';
  public tags: string = '';
  public selectedTags: string[] = [];
  public pseudoClass: string = '';
  public cssProperties: string[] = [];
  public selectedProperties: string[] = [];
  public cssCode: string = '';
  public colorPickerValue: string = '';

  selectedPseudoClass: string = '';
  pseudoClasses: string[] = [];
  secondaryName: string = '';


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
  @ViewChild('tabObj', { static: true }) tabObj!: TabComponent;

  public isBool: boolean = false;
  // Mapping Tab items Header property


  onSubmit() {
    // handle form submission
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
