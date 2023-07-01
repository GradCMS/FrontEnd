import { Component, OnInit,ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validator, Validators,ValidationErrors, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from 'src/app/sharedServices/userData/user.service/user.service.component';
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: []
})
export class UserEditComponent implements OnInit {
  object:any;
  editUser!: FormGroup;
   user:any;
  users:any;
  constructor(private route: ActivatedRoute, private userServ: UserService) { }

 ngOnInit() {

  this.route.params.subscribe((params: Params) => {
    this.object = params   
});
this.userServ.getAllUsers().subscribe(data  =>{
  this.users=data
 })
this.userServ.getUserByID(this.object.id).subscribe(data  =>{
  this.user=data
  console.log(this.user)

  

  let userName = this.user.user_name;
  let Email= this.user.email;
  let pass='';
  let conf_pass='';
  let role='';

  this.editUser = new FormGroup({
    "user_name": new FormControl(userName, Validators.required),
    "email": new FormControl(Email, [Validators.required, Validators.email]),
    "password": new FormControl(pass, Validators.compose ([Validators.required,Validators.minLength(8)])),
    "password_confirmation": new FormControl(conf_pass, Validators.compose([
      Validators.required,
      passwordMatchValidator
    ])),
    "role": new FormControl(role,Validators.required)
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
  onSubmit(){
      console.log("Submited");
      console.log(this.editUser.value)
    this.userServ.updateUser(this.editUser.value,this.object.id).subscribe(user => this.users.patch(user));
  
      
      }
    
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
    