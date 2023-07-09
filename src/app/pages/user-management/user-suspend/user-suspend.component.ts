import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupAlertComponent } from 'src/app/shared/popup/popup.alert/popup.alert.component';
import { UserService } from 'src/app/sharedServices/userData/user.service/user.service.component';

@Component({
  selector: 'app-user-suspend',
  templateUrl: './user-suspend.component.html',
  styleUrls: ['./user-suspend.component.css']
})

export class UserSuspendComponent implements OnInit {

  users: any;
  suspendedUsers: any;
  constructor(private userServ: UserService, public dialog: MatDialog) { 

  }

  ngOnInit() {

    this.userServ.getSuspendedUsers().subscribe(data  =>{
      this.suspendedUsers=data["suspended users"]
      console.log(this.suspendedUsers)
     })

  }

  onDelete(user: any): void {
    this.userServ.deleteUser(user.id).subscribe(() => {
      this.suspendedUsers = this.suspendedUsers.filter((r: any) => r.id !== user.id);
    });
    
  }
  onUnSuspend(user: any):void{
    this.userServ.unsusbendUser(user,user.id).subscribe(()=>{
    
      location.reload()
    },(error)=>
    {
    
    })

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
}