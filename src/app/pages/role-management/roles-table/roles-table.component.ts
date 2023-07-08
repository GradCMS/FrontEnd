import { Component, OnInit, ViewChild } from '@angular/core';
import { RoleService } from 'src/app/sharedServices/roleData/role.service/role.service.component';
import { PermissionService } from 'src/app/sharedServices/roleData/permission.service/PermissionService.component';
import { PopupAlertComponent } from 'src/app/shared/popup/popup.alert/popup.alert.component';
import { MatDialog } from '@angular/material/dialog';
import { RoleUpdate } from 'src/app/models/role';
import { SnackbarComponent } from 'src/app/shared/snackbar/snackbar.component';

@Component({
  selector: 'app-roles-table',
  templateUrl: './roles-table.component.html',
  styleUrls: ['./roles-table.component.css']
})
export class RolesTableComponent implements OnInit {
  @ViewChild('snackbar') private snackbar!: SnackbarComponent;
  message!: string;
  type!: string;
  showPermissions = false;
  roles: any;
  selectedPermissions: Array<any> = [];
  permissions: Array<any> = [];
  selectedRole: any;
  editingRole: any;
  updateRole: RoleUpdate= new RoleUpdate
  combinedPermissions: any[] = [];

  constructor(private roleServ: RoleService , private permissionServ: PermissionService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.permissionServ.getAllPermissions().subscribe(data => {
      this.permissions = data.Permissions
    
    });

    this.roleServ.getAllRoles().subscribe(data => {
      this.roles = data.roles;
    });
  }
 
  openDialog(role: any): void {
    const dialogRef = this.dialog.open(PopupAlertComponent, {
      width: '250px',
      data: { role: role, confirmationMessage: 'Are you sure you want to delete this role?' }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        this.onDelete(role); 
      }
    });
  }
  editRole(role: any): void {
    if(this.showPermissions===true){
      this.showPermissions=false
    }else{
    const{id,name,permissions}=role
    this.editingRole = {id,name,permissions}; // Create a copy of the role being edited and set editing flag to true
    this.selectedPermissions = permissions.map((p: any) => ({ id: p.id, name: p.name }));
    console.log(this.selectedPermissions)
    this.combinedPermissions = [...this.selectedPermissions];

    this.permissions.forEach(permission => {
      const foundPermission = this.combinedPermissions.find(m => m.id === permission.id);
      if (!foundPermission) {
        this.combinedPermissions.push(permission);
      }
    });

    this.showPermissions = true;
  }}

  saveRole(): void {
    // Make API call to update the role
    this.updateRole.name=this.editingRole.name
    this.updateRole.permissions=this.editingRole.permissions.map((p:any) => ({ name: p.name }))
    this.roleServ.updateRole(this.updateRole, this.editingRole.id).subscribe(role => {
      // Update the role in the roles array
      const index = this.roles.findIndex((r: { id: number; }) => r.id === role.id);
      if (index !== -1) {
        this.roles[index] = role;
      }
      this.message="Role Updated SuccessFulyy"
      this.type="success"
      this.snackbar.show()
    });

    this.editingRole = null;
    this.showPermissions = false;
  }

  checkPermission(permission: any): boolean {
    return this.editingRole.permissions.some((p: any) => p.id === permission.id);
  }

  togglePermission(permission: any): void {
    const index = this.editingRole.permissions.findIndex((p: any) => p.id === permission.id);

    if (index !== -1) {
      // Permission is already in the role's permissions, remove it
      this.editingRole.permissions.splice(index, 1);
    } else {
      // Permission is not in the role's permissions, add it
      this.editingRole.permissions.push(permission);
    }
  }
  onDelete(role: any): void {
    console.log(role.id)
    this.roleServ.deleteRole(role.id).subscribe(() => {
      this.roles = this.roles.filter((r: any) => r.id !== role.id);
      this.message='Role ' + role.name+'Deleted Success' ;
      this.type="success"
      this.snackbar.show()

    }, (error) => {
      // Handle error here
      this.message='There is user Have this Role: ' + role.name ;
      this.type="danger"
      this.snackbar.show()

    });
    
  }
  
}
