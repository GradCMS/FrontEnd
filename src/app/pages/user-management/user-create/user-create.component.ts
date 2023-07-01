import { Component, OnInit,ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validator, Validators,ValidationErrors, AbstractControl } from '@angular/forms';
import { UserService } from 'src/app/sharedServices/userData/user.service/user.service.component';
@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  
  createUser!: FormGroup;
  constructor(private userServ: UserService) { }
  users:any;
 ngOnInit(): void {
  this.userServ.getAllUsers().subscribe(data  =>{
    this.users=data
   })

    this.initForm();
  } 
  onSubmit(){
      console.log("Submited");
      console.log(this.createUser)
      this.userServ.creatUser(this.createUser.value).subscribe(user => this.users.push(user));
      }
    
  
      private initForm() {
        let userName = '';
        let email='';
        let pass='';
        let conf_pass='';
        let role='';

        this.createUser = new FormGroup({
          "user_name": new FormControl(userName, Validators.required),
          "email": new FormControl(email, [Validators.required, Validators.email]),
          "password": new FormControl(pass, Validators.compose ([Validators.required,Validators.minLength(8)])),
          "password_confirmation": new FormControl(conf_pass, Validators.compose([
            Validators.required,
            passwordMatchValidator
          ])),
          "role": new FormControl(role,Validators.required)
        });
        
      console.log()
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
    