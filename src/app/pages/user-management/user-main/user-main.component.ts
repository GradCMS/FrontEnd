import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/sharedServices/userData/user.service/user.service.component';
import { HttpClient } from '@angular/common/http';   
@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.css']
})
export class UserMainComponent implements OnInit {

  users: any;
  constructor(private userServ: UserService) { 

  }

  ngOnInit() {
    this.userServ.getAllUsers().subscribe(data  =>{
      this.users=data
     })

  }

}
