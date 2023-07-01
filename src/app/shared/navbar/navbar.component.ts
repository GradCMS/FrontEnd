import { Component, OnInit } from '@angular/core';
// import {inputs}
import {Router} from "@angular/router";
import { AuthServiceService } from '../../sharedServices/Auth/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  Authenticated : boolean = false;

  constructor(private router : Router , private authService:AuthServiceService) { }

  ngOnInit(): void {

  }
  logout() {
    this.authService.logout();
  }
  


  // check this link => https://medium.com/letsboot/lets-logout-of-your-angular4-app-5f4f6bd95159
  // check this link => https://medium.com/@sagodi97/angular-how-to-automatically-log-out-the-user-after-a-jwt-expires-dfa3ae96ea6
  // @input sliderBar: boolean = false;

}
