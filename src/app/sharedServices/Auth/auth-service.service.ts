import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  url = 'http://localHost:8000/api/auth/login';

  constructor( private router : Router ) { }

  isAuth() {
    if (sessionStorage.getItem('token')) {
      return true;
    }else {
      return false;
    }
  }
  logout() {
    console.log('Logout button clicked');
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
