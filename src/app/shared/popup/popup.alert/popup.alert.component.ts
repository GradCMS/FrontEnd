import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-popup.alert',
  templateUrl: './popup.alert.component.html',
  styleUrls: ['./popup.alert.component.css'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],

})


export class PopupAlertComponent  {
  role: any;
  confirmationMessage: any;

  constructor(public dialogRef: MatDialogRef<PopupAlertComponent>, 
     @Inject(MAT_DIALOG_DATA) public data: any
    ) {
      this.role = data.role;
      this.confirmationMessage = data.confirmationMessage;
    }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
}

