import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from "ngx-toastr";


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  url = 'http://localhost:8000/login';

  constructor( private router : Router ,private http : HttpClient) { }

  login(user_name: string, password: string) {
    const body = { user_name, password };
    return this.http.post(this.url, body);
  }

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
