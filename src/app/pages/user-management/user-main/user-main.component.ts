import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream

=======
import { HttpClient } from '@angular/common/http';   
import { UserService } from 'src/app/sharedServices/userData/user.service/user.service.component';   
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
  constructor(private userServ: UserService) { 

  }

  ngOnInit() {
    this.userServ.getAllUsers().subscribe(data  =>{
      this.users=data
     })

  }

>>>>>>> Stashed changes
}
