import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {AuthServiceService} from "../sharedServices/Auth/auth-service.service";
import {SnackbarComponent} from "../shared/snackbar/snackbar.component";


interface modifiedFormValues {
  user_name: string;
  password: string;

}
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})


export class LoginPageComponent implements OnInit {

  @ViewChild('snackbar') private snackbar!: SnackbarComponent;
  message!: string;
  type!: string;

  user_name!: string;
  password!: string;
  rememberMe!: boolean;

  error_: boolean = false;



  // review this link https://www.bezkoder.com/angular-14-jwt-auth/
  // constructor(private http: HttpClient, private modalService: NgbModal) { }

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient , private router: Router  , private authService:AuthServiceService ) {
  }



  ngOnInit(): void {
    if (this.authService.isAuth()) {
      this.router.navigate(['']);
    }
    this.rememberMe = false;
    this.form = this.formBuilder.group({
      user_name: '',
      password: '',
    })
  }
  private loginForm(modifiedFormValues: modifiedFormValues, url: string): Observable<any> {
    return this.http.post(url, modifiedFormValues);
  }


  url = 'http://localHost:8000/api/auth/login';
  login() {
    // requestBody = {
    //   user_name: this.form.user_name,
    //   password: this.form.password,
    // }
    // Handle authentication logic here
    // For example, make an API call to a backend server
    console.log('Login button clicked');
    console.log('Username:', this.form.value.user_name);
    console.log('Password:', this.form.value.password);
    console.log('Remember Me:', this.rememberMe);
    this.loginForm(this.form.value, this.url).subscribe(
      (response) => {
        console.log(response);
        const token = response.access_token;
        sessionStorage.setItem('token', token);
        console.log('Token:', sessionStorage.getItem('token'));
        if (token) {
          this.router.navigate(['']);
        }else{
          this.message = 'please enter valid credentials';
          this.type = 'error';
          this.snackbar.show();
        }
      },(error) => {
        this.error_ = true;
        console.log(error);
        this.message = 'please enter valid credentials';
        this.type = 'error';
        this.snackbar.show();
      }
    );
  }

  // the real login function injects the http client

  // login() {
  //   // Send authentication request to backend server
  //   this.http.post<any>('http://your-backend-server/login', { username: this._username, password: this._password })
  //     .subscribe(response => {
  //       // Assuming the server responds with a JWT token
  //       const token = response.token;
  //       // Store the token in local storage or other secure storage mechanisms
  //       localStorage.setItem('token', token);
  //       // Redirect or perform additional actions as needed
  //     }, (error: any) => {
  //       // Handle error responses from the server
  //       console.log(error);
  //     });
  // }

}
