import { Component, OnInit,ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validator, Validators,ValidationErrors, AbstractControl } from '@angular/forms';
import { UserService } from 'src/app/sharedServices/userData/user.service/user.service.component';
import { RoleService } from 'src/app/sharedServices/roleData/role.service/role.service.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  
  createUser!: FormGroup;
  roles: Array <any>= [];
  submited: boolean=false;
  selectedRole: any;
  constructor(private userServ: UserService, private roleServ: RoleService,private route :Router) { }
  users:any;
  ngOnInit(): void {
    this.userServ.getAllUsers().subscribe(data => {
      this.users = data;
    });
  
    this.roleServ.getAllRoles().subscribe(data => {
      this.roles = data.roles.map((item: any) => ({
        name: item.name
      }));
    });
  
    this.initForm();
  }
  
  onSubmit() {
    this.submited = true;
  
    if (this.createUser.valid) {
      const user = this.createUser.value;
  
      // console.log('Submitted user:', user);
      console.log(user)
      this.userServ.creatUser(user).subscribe(()=> {
        this.route.navigateByUrl('UserManagement')
     
      });
    }
  }
  
  
  
  
      private initForm() {
        let userName = '';
        let email='';
        let pass='';
        let conf_pass='';
        let roles='';

        this.createUser = new FormGroup({
          "user_name": new FormControl(userName,[Validators.required,Validators.minLength(3)]),
          "email": new FormControl(email, [Validators.required, Validators.email]),
          "password": new FormControl(pass, Validators.compose ([Validators.required,Validators.minLength(6)])),
          "password_confirmation": new FormControl(conf_pass, Validators.compose([
            Validators.required,
            passwordMatchValidator
          ])),
          "role": new FormControl(roles,Validators.required)
        });
     
        // Set up validator for password confirmation
        this.createUser.get('password_confirmation')?.setValidators([
          Validators.required,
          (group) => passwordMatchValidator(this.createUser)
        ]);
      
        // Add null checks for password and password_confirmation controls
        const passwordControl = this.createUser.get('password');
        const confirmPasswordControl = this.createUser.get('password_confirmation');
        if (passwordControl && confirmPasswordControl) {
          passwordControl.valueChanges.subscribe(() => {
            confirmPasswordControl.updateValueAndValidity();
          });
          confirmPasswordControl.valueChanges.subscribe(() => {
            passwordControl.updateValueAndValidity();
          });
        }
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
    