import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/sharedServices/Auth/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  roleUrls: string[] = [];

  constructor(private service: AuthServiceService, private route: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.service.isAuth()) {
      this.roleUrls=this.service.getRoleAndPermissionAndUrls()
      console.log(this.roleUrls)
     console.log(route.url[0].path)
      if(this.roleUrls.includes(route.url[0].path)){
   
      return true;
     }else {
      this.route.navigate(['']);
      alert('unauthorized access');
      return false
     }
    } else {
      this.route.navigate(['login']);
      return false;
    }
  }
 
}
