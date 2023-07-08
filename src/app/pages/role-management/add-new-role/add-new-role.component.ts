import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleUpdate } from 'src/app/models/role';
import { SnackbarComponent } from 'src/app/shared/snackbar/snackbar.component';
import { PermissionService } from 'src/app/sharedServices/roleData/permission.service/PermissionService.component';
import { RoleService } from 'src/app/sharedServices/roleData/role.service/role.service.component';

@Component({
  selector: 'app-add-new-role',
  templateUrl: './add-new-role.component.html',
  styleUrls: ['./add-new-role.component.css']
})
export class AddNewRoleComponent implements OnInit {
  @ViewChild('snackbar') private snackbar!: SnackbarComponent;
  message!:string
  type!:string
  permissions: any;
  name!: string;
  newRole:RoleUpdate=new RoleUpdate()
  selectedPermissions: boolean[] = [];
    formSubmitted = false; // Declare the formSubmitted property here
  constructor(private roleServ: RoleService, private permissionServ: PermissionService,private route:Router) { }

  ngOnInit(): void {
    this.permissionServ.getAllPermissions().subscribe(data => {
      this.permissions = data.Permissions;
    
    });


   
  }




  onSubmit(): void {

     this.formSubmitted = true; // Set formSubmitted to true when the form is submitted

    if (!this.name || this.selectedPermissions.length === 0) {
      return;
    }
    const selectedPermissions = this.permissions.filter((permission:any, index:any) => this.selectedPermissions[index]);
    const permissionObjects = selectedPermissions.map((permission:any) => ({ name: permission.name }));
  

    this.newRole.name = this.name;
    this.newRole.permissions = permissionObjects;

    console.log(this.newRole);
    this.roleServ.createRole(this.newRole).subscribe(()=>{
      this.message='Role Added Success' ;
      this.type="success"
      
      this.snackbar.show()
      setTimeout(() => {
        location.reload();
      }, 500);

    }, (error) => {
      // Handle error here
      this.message='Error !!' 
      this.type="danger"
      this.snackbar.show()

    }


 
  )}
    onPermissionChange(): void {
    this.formSubmitted = false; // Reset formSubmitted to false when a permission is selected or deselected
  }
}