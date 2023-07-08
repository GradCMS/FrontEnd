import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {SnackbarComponent} from "../../../shared/snackbar/snackbar.component";
import {AuthServiceService} from "../../../sharedServices/Auth/auth-service.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-landing-content',
  templateUrl: './landing-content.component.html',
  styleUrls: ['./landing-content.component.css']
})
export class LandingContentComponent implements OnInit {
  username: string = '';
  userCount: any;
  response: any;
  @ViewChild('snackbar') private snackbar!: SnackbarComponent;
  message!: string;
  type!: string;

  //make getter for the username

  public getUsername(): string {
    return this.username;
  }
  constructor(private http : HttpClient,private auth : AuthServiceService , private router: Router) { }

  ngOnInit(): void {
    this.http.get('http://LocalHost:8000/api/users/count').subscribe(
      (response) => {
        this.userCount = response.valueOf();
        console.log(this.userCount);
        this.userCount = this.userCount.count;
      }
    )
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    // this.http.get('http://LocalHost:8000/api/auth/me', {headers} ).subscribe(
    //   (response) => {
    //     console.log(response);
    //     this.response = response.valueOf();
    //     this.username = this.response.user_name;
    //     sessionStorage.setItem('username', this.username);
    //     this.message = `Welcome back ${this.username}`;
    //     this.type = 'success';
    //     this.snackbar.show();
    //     console.log("you are logged in as " + this.username);
    //   },error =>
    //   {
    //     console.log(error);
    //   })
    this.auth.isValid().subscribe(
      (response) => {

        console.log(response);
        this.response = response.valueOf();
        this.username = this.response.user_name;
        sessionStorage.setItem('username', this.username);
        this.message = `Welcome back ${this.username}`;
        this.type = 'success';
        this.snackbar.show();
        console.log("you are logged in as " + this.username);
      },error =>
      {
        if (error.status == 401)
        {
          alert("Your session has expired, please login again");
          this.auth.logout();
          this.router.navigate(['login']);
        }
        console.log(error);
      })
  }

}
