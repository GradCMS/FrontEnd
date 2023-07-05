import { Component, OnInit,ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validator, Validators,ValidationErrors, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RoleService } from 'src/app/sharedServices/roleData/role.service/role.service.component';
import { UserService } from 'src/app/sharedServices/userData/user.service/user.service.component';
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  object:any;
  editUser: FormGroup;
   user:any;
  users:any;
  roles: Array <any>= [];
  submited: boolean=false;
  constructor(private route: ActivatedRoute, private userServ: UserService, private roleServ: RoleService) { }

 ngOnInit() {

  this.route.params.subscribe((params: Params) => {
    this.object = params   
});
this.userServ.getAllUsers().subscribe(data  =>{
  this.users=data
 })
this.userServ.getUserByID(this.object.id).subscribe(data  =>{
  this.user=data
console.log(this.user.roles.name)
  this.roleServ.getAllRoles().subscribe(data  =>{
    this.roles = data.map((item: any) => ({
      id: item.id,
      name: item.name
    }));
   })
  

  let userName = this.user.user_name;
  let Email= this.user.email;
  let pass='';
  let conf_pass='';
  let roles=this.user.roles;

  this.editUser = new FormGroup({
    "user_name": new FormControl(userName, Validators.required),
    "email": new FormControl(Email, [Validators.required, Validators.email]),
    "password": new FormControl(pass, Validators.compose ([Validators.required,Validators.minLength(8)])),
    "password_confirmation": new FormControl(conf_pass, Validators.compose([
      Validators.required,
      passwordMatchValidator
    ])),
    "roles": new FormControl(roles,Validators.required)
  });
  
console.log()
  // Set up validator for password confirmation
  this.editUser.get('password_confirmation')?.setValidators([
    Validators.required,
    (group) => passwordMatchValidator(this.editUser)
  ]);

  // Add null checks for password and password_confirmation controls
  const passwordControl = this.editUser.get('password');
  const confirmPasswordControl = this.editUser.get('password_confirmation');
  if (passwordControl && confirmPasswordControl) {
    passwordControl.valueChanges.subscribe(() => {
      confirmPasswordControl.updateValueAndValidity();
    });
    confirmPasswordControl.valueChanges.subscribe(() => {
      passwordControl.updateValueAndValidity();
    });
  }
 })
  
}
onSubmit() {
  this.submited = true;

  if (this.editUser.valid) {
    const user = this.editUser.value;

    console.log('Submitted user:', user);

    this.userServ.updateUser(user,this.object.id).subscribe(updatedUser => {
      this.users.patch(updatedUser);
    });
  }}



}
    function passwordMatchValidator(formGroup: FormGroup): ValidationErrors | null {
      const password = formGroup.get('password')?.value;
      const confirmPassword = formGroup.get('password_confirmation')?.value;
    
      if (password === confirmPassword) {
        formGroup.get('password_confirmation')?.setErrors(null);
        return null;
      } else {
        formGroup.get('password_confirmation')?.setErrors({ passwordMismatch: true });
        return { passwordMismatch: true };
      }
    }
    