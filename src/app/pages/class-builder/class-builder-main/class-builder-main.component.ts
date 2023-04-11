import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-class-builder-main',
  templateUrl: './class-builder-main.component.html',
  styleUrls: ['./class-builder-main.component.css']
})
export class ClassBuilderMainComponent implements OnInit {
  public classPlaceholder: string = '';
  public tags: string = '';
  public selectedTags: string[] = [];
  public pseudoClass: string = '';
  public cssProperties: string[] = [];
  public selectedProperties: string[] = [];
  public cssCode: string = '';
  public colorPickerValue: string = '';

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

  onSubmit() {
    // handle form submission
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
