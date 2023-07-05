import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream

=======
import { HttpClient } from '@angular/common/http';   
<<<<<<< Updated upstream
import { UserService } from 'src/app/sharedServices/userData/user.service/user.service.component';   
>>>>>>> Stashed changes
=======
import { MatDialog } from '@angular/material/dialog';
import { PopupAlertComponent } from 'src/app/shared/popup/popup.alert/popup.alert.component';
>>>>>>> Stashed changes
@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.css']
})
export class UserMainComponent implements OnInit {

<<<<<<< Updated upstream
  constructor() { }

  ngOnInit(): void {
  }

=======
  users: any;
  constructor(private userServ: UserService, public dialog: MatDialog) { 

  }

  ngOnInit() {
    this.userServ.getAllUsers().subscribe(data  =>{
      this.users=data
     })

  }
<<<<<<< Updated upstream

>>>>>>> Stashed changes
=======
  onDelete(user: any): void {
    this.userServ.deleteUser(user.id).subscribe(() => {
      this.users = this.users.filter((r: any) => r.id !== user.id);
    });
    
  }
  openDialog(user: any): void {
    const dialogRef = this.dialog.open(PopupAlertComponent, {
      width: '250px',
      data: { user: user, confirmationMessage: 'Are you sure you want to delete this user?' }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        this.onDelete(user); 
      }
    });
  }
>>>>>>> Stashed changes
}
