import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/sharedServices/roleData/role.service/role.service.component';
import { permissionService } from 'src/app/sharedServices/roleData/permission.service/permission.service.component';
import { PopupAlertComponent } from 'src/app/shared/popup/popup.alert/popup.alert.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-roles-table',
  templateUrl: './roles-table.component.html',
  styleUrls: ['./roles-table.component.css']
})
export class RolesTableComponent implements OnInit {
  showPermissions = false;
  roles: any;
  selectedPermissions: Array<any> = [];
  permissions: Array<any> = [];
  selectedRole: any;
  editingRole: any;
  combinedPermissions: any[] = [];

  constructor(private roleServ: RoleService, private permissionServ: permissionService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.permissionServ.getAllPermissions().subscribe(data => {
      this.permissions = data;
    });

    this.roleServ.getAllRoles().subscribe(data => {
      this.roles = data;
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
    this.editingRole = { ...role }; // Create a copy of the role being edited and set editing flag to true
    this.selectedPermissions = this.editingRole.permissions;
    this.combinedPermissions = [...this.selectedPermissions];

    this.permissions.forEach(permission => {
      const foundPermission = this.combinedPermissions.find(m => m.id === permission.id);
      if (!foundPermission) {
        this.combinedPermissions.push(permission);
      }
    });

    this.showPermissions = true;
  }

  saveRole(): void {
    // Make API call to update the role
    this.roleServ.updateRole(this.editingRole, this.editingRole.id).subscribe(role => {
      // Update the role in the roles array
      const index = this.roles.findIndex((r: { id: number; }) => r.id === role.id);
      if (index !== -1) {
        this.roles[index] = role;
      }
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
    this.roleServ.deleteRole(role.id).subscribe(() => {
      this.roles = this.roles.filter((r: any) => r.id !== role.id);
    });
    
  }
  
}
