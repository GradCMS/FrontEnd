import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-landing-content',
  templateUrl: './landing-content.component.html',
  styleUrls: ['./landing-content.component.css']
})
export class LandingContentComponent implements OnInit {
  username: string = '';
  userCount: any;
  response: any;

  //make getter for the username

  public getUsername(): string {
    return this.username;
  }
  constructor(private http : HttpClient) { }

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
    this.http.get('http://LocalHost:8000/api/auth/me', {headers} ).subscribe(
      (response) => {
        console.log(response);
        this.response = response.valueOf();
        this.username = this.response.user_name;
        sessionStorage.setItem('username', this.username);
      },error =>
      {
        console.log(error);
      })
  }

}
