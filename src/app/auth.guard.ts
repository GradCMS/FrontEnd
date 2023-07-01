import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthServiceService} from "./sharedServices/Auth/auth-service.service";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  // constructor(private router: Router, private jwtHelper: JwtHelperService) {

  }
  canActivate(){
    const token = localStorage.getItem('token');

    // if (token && !this.jwtHelper.isTokenExpired(token)) {
    //   return true;
    // }

    this.router.navigate(['/login']);
    return false;
  }



}
