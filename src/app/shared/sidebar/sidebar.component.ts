import {Component, Renderer2, ElementRef, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { PermissionDisplay } from 'src/app/models/Permission';
import { AuthServiceService } from 'src/app/sharedServices/Auth/auth-service.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  logoUrl = '../../../assets/img/AdminLTELogo.png';
  userImageUrl = '../../../assets/img/user2-160x160.jpg';
  userName!: string | null;
  roles:any 
  permissionsOfRole:any;
  roleName: any;
  permissionUrls: PermissionDisplay[] = [
    {
      name: 'page management',
      authorized:true
    },
    {
      name: 'siteIdentity management',
      authorized:true
    },
    {
      name: 'module management',
      authorized:true
    
    },
    {
      name: 'class management',
      authorized:true
    },
    {
      name: 'display management',
      authorized:true
    },
    {
      name: 'navBar management',
      authorized:true
    },
    {
      name: 'user management',
      authorized:true
    },
  
  
   
    // need Edit >>>>>>>>
    {
      name: 'role management',
      authorized:true
    }

  ];

  constructor(private renderer: Renderer2, private el: ElementRef,private router: Router,private serviceAuth:AuthServiceService) {
  }

  async ngOnInit() {
    if (sessionStorage.getItem('username') !== null) {
      this.userName = sessionStorage.getItem('username');
    } else {
      this.userName = 'Guest'
    }

    await this.getPermisssionsOfRole();   
  // set false to the Permission Urls Not Found in the PermissionRole
   this.changePermissionAuthorized()
   

  }

  changePermissionAuthorized(){
    for (let i = 0; i < this.permissionUrls.length; i++) {
      let found = false;
      for (let j = 0; j < this.permissionsOfRole.length; j++) {
        if (this.permissionUrls[i].name === this.permissionsOfRole[j].name) {
          found = true;
          break;
        }
      }
      this.permissionUrls[i].authorized = found; // Set isTrue to true if permission is found, false otherwise
    }
  }
  
  async getPermisssionsOfRole(): Promise<any> {
    this.roleName = this.serviceAuth.getRoleName();
    const rolesJson=localStorage.getItem('roles')
    if(rolesJson){
    this.roles = JSON.parse(rolesJson);
    }
    const filteredRoles = this.roles.filter((role: { name: string; }) => role.name === this.roleName);
     if(filteredRoles[0].permissions){
     this.permissionsOfRole=filteredRoles[0].permissions
    
    }
  }

  

  //fix the next  function to work on all the sidebar links

  addClass(event: Event): void {
    const target = event.target as HTMLElement;
    this.renderer.addClass(target, 'active');
  }
}
