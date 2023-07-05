import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { permissionService } from 'src/app/sharedServices/roleData/permission.service/permission.service.component';
import { RoleService } from 'src/app/sharedServices/roleData/role.service/role.service.component';

@Component({
  selector: 'app-add-new-role',
  templateUrl: './add-new-role.component.html',
  styleUrls: ['./add-new-role.component.css']
})
export class AddNewRoleComponent implements OnInit {
  permissions: any;
  roles: any;
  createRole!: FormGroup;

  constructor(private roleServ: RoleService, private permissionServ: permissionService) { }

  ngOnInit(): void {
    this.permissionServ.getAllPermissions().subscribe(data => {
      this.permissions = data;
      this.initializeForm();
    });

    this.roleServ.getAllRoles().subscribe(data => {
      this.roles = data;
    });
  }

  initializeForm(): void {
    this.createRole = new FormGroup({
      name: new FormControl('', Validators.required),
      permissions: new FormArray([])
    });

    // Create form controls for permissions and add them to the form array
    this.permissions.forEach((permission: any) => {
      const control = new FormControl(false);
      (this.createRole.controls['permissions'] as FormArray).push(control);
    });
  }

  onSubmit(): void {
    // Get the selected permissions
    const selectedPermissions = this.createRole.value.permissions
      .map((checked: boolean, index: number) => checked ? this.permissions[index] : null)
      .filter((permission: any) => permission !== null);

    // Set the selected permissions to the role
    const role = {
      name: this.createRole.value.name,
      permissions: selectedPermissions
    };

    this.roleServ.createRole(role).subscribe(role => this.roles.push(role));
    this.createRole.reset(); // Reset the form inputs

  }
}
