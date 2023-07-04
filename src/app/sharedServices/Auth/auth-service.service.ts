import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Permission } from 'src/app/models/Permission';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  url = 'http://localHost:8000/api/auth/login';
  urlRole='http://LocalHost:8000/api/roles'
  roles:any;
  constructor( private router : Router ,private http : HttpClient) { }

  login(user_name: string, password: string) {
    const body = { user_name, password };
    return this.http.post(this.url, body);
    
  }
  logout() {
    console.log('Logout button clicked');
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
  isAuth() {
    if (sessionStorage.getItem('token')) {
      console.log("SessionStorage")
      console.log(sessionStorage)
      return true;
     
    }else {
      return false;
    }
  }

  // get Role Name From Session Stoarge 
  getRoleName(){
    const roleName = sessionStorage.getItem('role');
    return roleName

  }
  async getRoles() :Promise<Observable<any>>{
    return await this.http.get<any>(this.urlRole)
  }
 async setRoles(){
    (await this.getRoles()).subscribe(data=>{
      this.roles=data.roles
      localStorage.setItem('roles', JSON.stringify(this.roles));
    })

  }
  roleName: any;
  permissionsOfRole: any;

  // ATTribute need in Role Authorization 
  object:any;
  roleUrls: string[] = [];
  urls:string[]=[]
  item!:string
  permissionUrls: Permission[] = [
    {
      name: 'page management',
      urls: ['EditPage', 'CreatePage', 'PageManagement']
    },
    {
      name: 'module management',
      urls: ['ModuleManagement', 'ModuleInsert', 'ModuleIEdit']
    },
    {
      name: 'display management',
      urls: ['DisplayManagement', 'DisplayInsert', 'DisplayEdit']
    },
    {
      name: 'user management',
      urls: ['UserManagement', 'CreateUser', 'EditUser']
    },
    {
      name: 'class management',
      urls: ['ClassBuilder', 'ClassBuilder-Edit']
    },
    {
      name: 'navBar management',
      urls: ['NavbarElements', 'NavElementInsert', 'NavElementEdit']
    },
    {
      name: 'siteIdentity management',
      urls: ['SiteIdentity']
    },
    // need Edit >>>>>>>>
    {
      name: 'role management',
      urls: ['RoleManagement']
    }

  ];

  getRoleAndPermissionAndUrls() {
    // get Role Name From Session Stoarge 
    this.roleName = this.getRoleName()
    const rolesJson=localStorage.getItem('roles')
    if(rolesJson){
    this.roles = JSON.parse(rolesJson);
    }
    console.log(this.roles)
    const filteredRoles = this.roles.filter((role: { name: string; }) => role.name === this.roleName);
     if(filteredRoles[0].permissions){
     this.permissionsOfRole=filteredRoles[0].permissions
     this.getAllUrlRole()
     }
   

  return this.roleUrls
 }
  //loop on each permission and get the urls of each permission inside the role
 getAllUrlRole(){
  this.roleUrls=[]
 this.permissionsOfRole.forEach((permission: { name: string } )  => {
  this.object = this.permissionUrls.find(url => url.name === permission.name);
  this.urls=this.object?.urls
  
for ( this.item of this.urls) {
 this.roleUrls.push(this.item)
}
});


 }
 
}
