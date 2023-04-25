import {Component, OnInit, ElementRef, ViewChild, Input} from '@angular/core';
import {trigger, state, style, animate, transition} from "@angular/animations";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  animations: [
    trigger('tabContentTransition', [
      state('*', style({opacity: 1})),
      transition(':enter', [
        style({opacity: 0}),
        animate('300ms ease-in-out')
      ]),
      transition(':leave', [
        animate('10ms ease-in-out', style({opacity: 0}))
      ])
    ])
  ]
})
export class TabsComponent implements OnInit {
  tabsForm!: FormGroup;
  @ViewChild('errorDiv') errorDiv: ElementRef = new ElementRef('');
  activeTab: string = 'Background';

  cssStyles!: any;
  @Input() classPlaceHolderChild: string = '';

  selectedFontFamily: string = 'Arial';
  selectedColor: string = '#000000';
  selectedFontStyle: string = 'normal';
  selectedDecorationStyle: string = 'none';
  selectedFontSize: number = 12;
  selectedTextAlign: string = 'left';
  selectedBoarderType: string = 'None';
  selectedBoarderStyle: string = 'Solid';
  selectedBoarderWidth: number = 0;
  selectedBoarderColor: string = '#000000';
  selectedRadiusType: string = 'None';
  selectedSameRadius: number = 0;
  selectedBottomLeftRadius: number = 0;
  selectedTopLeftRadius: number = 0;
  selectedTopRightRadius: number = 0;
  selectedBottomRightRadius: number = 0;
  // outliers
  selectedOutlineStyle: string = 'Solid';
  selectedOutlineWidth: number = 0;
  selectedOutlineColor: string = '#000000';

  // end of outliers
  onTabClick(tab: string) {
    this.activeTab = tab;
  }
  constructor(private fb: FormBuilder) {
  }
  ngOnInit(): void {
    this.tabsForm = this.fb.group({
      tabBackground: this.fb.group({
        bgcolorPicker: ['', Validators.required],
        photoUpload: ['', Validators.required]
      }),
      tabText: this.fb.group({
        fontFamily: ['', Validators.required],
        fontcolorPicker: ['', Validators.required],
        fontStyle: ['', Validators.required],
        decorationStyle: ['', Validators.required],
        fontSize: ['', Validators.required],
        textAlign: ['', Validators.required]
      }),
      tabBoarder: this.fb.group({
        boarderWidth: ['', Validators.required],
        boarderColor: ['', Validators.required],
        boarderStyle: ['', Validators.required],
        boarderType: ['', Validators.required],
        radiusType: ['', Validators.required],
        sameRadius: ['', Validators.required],
        bottomLeftRadius: ['', Validators.required],
        topLeftRadius: ['', Validators.required],
        topRightRadius: ['', Validators.required],
        bottomRightRadius: ['', Validators.required],
      }),
      tabOutline: this.fb.group({
        outlineStyle: ['', Validators.required],
        outlineWidth: ['', Validators.required],
        outlineColor: ['', Validators.required],
      }),
      tabCustomCss: this.fb.group({
        customCss: ['', Validators.required]
      })
    });
  }

  printForm() {
    console.log(this.tabsForm.value);
    console.log(this.generateCssString(this.tabsForm));
    console.log("css without spaces:")
    console.log(this.generateCssStringWithClassName(this.tabsForm, this.classPlaceHolderChild));
    console.log("ngStyle:")
    console.log(this.parseCssStringToNgStyle(this.generateCssStringWithoutNewLine(this.tabsForm)));
    // console.log(this.generateCssStringWithClassName(this.tabsForm, this.classPlaceHolderChild));
  }

  generateCssStringWithClassName(form: FormGroup, className: string): string {
    let cssString = '';
    cssString += `{\n`;
    cssString += this.generateCssString(form);
    cssString += `}\n`;
    return cssString;
  }



  generateCssString(form: FormGroup): string {
    let cssString = '{\n';

    // Tab Background CSS
    const bgcolorPicker = form.get('tabBackground.bgcolorPicker')?.value;
    const photoUpload = form.get('tabBackground.photoUpload')?.value;
    if (bgcolorPicker) cssString += `background-color: ${bgcolorPicker};\n`;
    if (photoUpload) cssString += `background-image: url(${photoUpload});\n`;
    // Tab Text CSS
    const fontFamily = form.get('tabText.fontFamily')?.value;
    const fontcolorPicker = form.get('tabText.fontcolorPicker')?.value;
    const fontStyle = form.get('tabText.fontStyle')?.value;
    const decorationStyle = form.get('tabText.decorationStyle')?.value;
    const fontSize = form.get('tabText.fontSize')?.value;
    const textAlign = form.get('tabText.textAlign')?.value;
    if (fontFamily) cssString += `font-family: ${fontFamily};\n`;
    if (fontcolorPicker) cssString += `color: ${fontcolorPicker};\n`;
    if (fontStyle) cssString += `font-style: ${fontStyle};\n`;
    if (decorationStyle) cssString += `text-decoration: ${decorationStyle};\n`;
    if (fontSize) cssString += `font-size: ${fontSize}px;\n`;
    if (textAlign) cssString += `text-align: ${textAlign};\n`;

    // cssString += `font-family: ${fontFamily};\ncolor: ${fontcolorPicker};\nfont-style: ${fontStyle};\ntext-decoration: ${decorationStyle};\nfont-size: ${fontSize}px;\ntext-align: ${textAlign};\n`;
    // Tab Border CSS
    const boarderWidth = form.get('tabBoarder.boarderWidth')?.value;
    const boarderColor = form.get('tabBoarder.boarderColor')?.value;
    const boarderStyle = form.get('tabBoarder.boarderStyle')?.value;
    const boarderType = form.get('tabBoarder.boarderType')?.value;
    const radiusType = form.get('tabBoarder.radiusType')?.value;
    const sameRadius = form.get('tabBoarder.sameRadius')?.value;
    const bottomLeftRadius = form.get('tabBoarder.bottomLeftRadius')?.value;
    const topLeftRadius = form.get('tabBoarder.topLeftRadius')?.value;
    const topRightRadius = form.get('tabBoarder.topRightRadius')?.value;
    const bottomRightRadius = form.get('tabBoarder.bottomRightRadius')?.value;
    if (boarderWidth) cssString += `border-width: ${boarderWidth}px;\n`;
    if (boarderColor) cssString += `border-color: ${boarderColor};\n`;
    if (boarderStyle) cssString += `border-style: ${boarderStyle};\n`;
    if (boarderType) cssString += `border-${boarderType}-radius: ${sameRadius ? sameRadius + 'px' : ''};\n`;
    if (radiusType === 'same') cssString += `border-${boarderType}-radius: ${sameRadius + 'px'};\n`;
    if (radiusType === 'separate') cssString += `border-${boarderType}-radius: ${topLeftRadius + 'px ' + topRightRadius + 'px ' + bottomRightRadius + 'px ' + bottomLeftRadius + 'px'};\n`;

    // cssString += `border-width: ${boarderWidth}px;\nborder-color: ${boarderColor};\nborder-style: ${boarderStyle};\nborder-${boarderType}-radius: ${sameRadius ? sameRadius + 'px' : ''};\nborder-${boarderType}-radius: ${radiusType === 'same' ? sameRadius + 'px' : ''};\nborder-${boarderType}-radius: ${radiusType === 'separate' ? topLeftRadius + 'px ' + topRightRadius + 'px ' + bottomRightRadius + 'px ' + bottomLeftRadius + 'px' : ''};\n`;

    // Tab Outline CSS
    const outlineStyle = form.get('tabOutline.outlineStyle')?.value;
    const outlineWidth = form.get('tabOutline.outlineWidth')?.value;
    const outlineColor = form.get('tabOutline.outlineColor')?.value;
    if (outlineStyle) cssString += `outline-style: ${outlineStyle};\n`;
    if (outlineWidth) cssString += `outline-width: ${outlineWidth}px;\n`;
    if (outlineColor) cssString += `outline-color: ${outlineColor};\n`;
    // cssString += `outline-style: ${outlineStyle};\noutline-width: ${outlineWidth}px;\noutline-color: ${outlineColor};\n`;
    cssString += `}\n`;
    this.cssStyles = cssString;
    return cssString;
  }
  parseCssStringToNgStyle(cssString: string): string {
    const styles: { [key: string]: string } = {};
    cssString.split(';').forEach(style => {
      const [property, value] = style.split(':');
      if (property && value) {
        const formattedProperty = property.trim().replace(/-([a-z])/g, (m, w) => w.toUpperCase());
        styles[formattedProperty] = value.trim();
      }
    });
    this.cssStyles= JSON.stringify(styles).replace(/["{}]/g, '').replace(/,/g, ';' );
    return JSON.stringify(styles)
      .replace(/["{}]/g, '')
      .replace(/,/g, ';');
  }
  generateCssStringWithoutNewLine(form: FormGroup): string {
    let cssString = '';

    // Tab Background CSS
    const bgcolorPicker = form.get('tabBackground.bgcolorPicker')?.value;
    const photoUpload = form.get('tabBackground.photoUpload')?.value;
    if (bgcolorPicker) cssString += `background-color: ${bgcolorPicker};`;
    if (photoUpload) cssString += `background-image: url(${photoUpload});`;
    // Tab Text CSS
    const fontFamily = form.get('tabText.fontFamily')?.value;
    const fontcolorPicker = form.get('tabText.fontcolorPicker')?.value;
    const fontStyle = form.get('tabText.fontStyle')?.value;
    const decorationStyle = form.get('tabText.decorationStyle')?.value;
    const fontSize = form.get('tabText.fontSize')?.value;
    const textAlign = form.get('tabText.textAlign')?.value;
    if (fontFamily) cssString += `font-family: ${fontFamily};`;
    if (fontcolorPicker) cssString += `color: ${fontcolorPicker};`;
    if (fontStyle) cssString += `font-style: ${fontStyle};`;
    if (decorationStyle) cssString += `text-decoration: ${decorationStyle};`;
    if (fontSize) cssString += `font-size: ${fontSize}px;`;
    if (textAlign) cssString += `text-align: ${textAlign};`;

    // cssString += `font-family: ${fontFamily};\ncolor: ${fontcolorPicker};\nfont-style: ${fontStyle};\ntext-decoration: ${decorationStyle};\nfont-size: ${fontSize}px;\ntext-align: ${textAlign};\n`;
    // Tab Border CSS
    const boarderWidth = form.get('tabBoarder.boarderWidth')?.value;
    const boarderColor = form.get('tabBoarder.boarderColor')?.value;
    const boarderStyle = form.get('tabBoarder.boarderStyle')?.value;
    const boarderType = form.get('tabBoarder.boarderType')?.value;
    const radiusType = form.get('tabBoarder.radiusType')?.value;
    const sameRadius = form.get('tabBoarder.sameRadius')?.value;
    const bottomLeftRadius = form.get('tabBoarder.bottomLeftRadius')?.value;
    const topLeftRadius = form.get('tabBoarder.topLeftRadius')?.value;
    const topRightRadius = form.get('tabBoarder.topRightRadius')?.value;
    const bottomRightRadius = form.get('tabBoarder.bottomRightRadius')?.value;
    if (boarderWidth) cssString += `border-width: ${boarderWidth}px;`;
    if (boarderColor) cssString += `border-color: ${boarderColor};`;
    if (boarderStyle) cssString += `border-style: ${boarderStyle};`;
    if (boarderType) cssString += `border-${boarderType}-radius: ${sameRadius ? sameRadius + 'px' : ''};`;
    if (radiusType === 'same') cssString += `border-${boarderType}-radius: ${sameRadius + 'px'};`;
    if (radiusType === 'separate') cssString += `border-${boarderType}-radius: ${topLeftRadius + 'px ' + topRightRadius + 'px ' + bottomRightRadius + 'px ' + bottomLeftRadius + 'px'};`;

    // cssString += `border-width: ${boarderWidth}px;\nborder-color: ${boarderColor};\nborder-style: ${boarderStyle};\nborder-${boarderType}-radius: ${sameRadius ? sameRadius + 'px' : ''};\nborder-${boarderType}-radius: ${radiusType === 'same' ? sameRadius + 'px' : ''};\nborder-${boarderType}-radius: ${radiusType === 'separate' ? topLeftRadius + 'px ' + topRightRadius + 'px ' + bottomRightRadius + 'px ' + bottomLeftRadius + 'px' : ''};\n`;

    // Tab Outline CSS
    const outlineStyle = form.get('tabOutline.outlineStyle')?.value;
    const outlineWidth = form.get('tabOutline.outlineWidth')?.value;
    const outlineColor = form.get('tabOutline.outlineColor')?.value;
    if (outlineStyle) cssString += `outline-style: ${outlineStyle};`;
    if (outlineWidth) cssString += `outline-width: ${outlineWidth}px;`;
    if (outlineColor) cssString += `outline-color: ${outlineColor};`;
    // cssString += `outline-style: ${outlineStyle};\noutline-width: ${outlineWidth}px;\noutline-color: ${outlineColor};\n`;
    this.cssStyles = cssString;
    return cssString;
  }

  addCustomCss() {

  }

  removeCustomCss() {

  }

  selectedFileName: any = null;
  selectedFileBackground: File | null = null;

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      if (!file.type.startsWith('image/')) {
        this.errorDiv.nativeElement.style.display = 'block';
        this.selectedFileBackground = null;
        this.selectedFileName = null;
        return;
      }
      this.selectedFileBackground = file;
      this.selectedFileName = file.name;
      this.errorDiv.nativeElement.style.display = 'none';
    } else {
      this.selectedFileBackground = null;
      this.selectedFileName = null;
      this.errorDiv.nativeElement.style.display = 'none';
    }
  }

  imageUrl!: string | ArrayBuffer | null;

  onUpload() {
    if (this.selectedFileBackground) {
      const formData = new FormData();
      const file = this.selectedFileBackground;

      formData.append('file', this.selectedFileBackground, this.selectedFileBackground.name);
      // upload the file
      console.log(formData + " " + this.selectedFileBackground);
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
      reader.readAsDataURL(file);
    } else {
      this.errorDiv.nativeElement.style.display = 'block';
      return;
    }
  }
}
