import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-landing-content',
  templateUrl: './landing-content.component.html',
  styleUrls: ['./landing-content.component.css']
})
export class LandingContentComponent implements OnInit {
  username: string = 'John Doe';
  userCount: any;

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://LocalHost:8000/api/users/count').subscribe(
      (response) => {
        this.userCount = response.valueOf();
        console.log(this.userCount);
        this.userCount = this.userCount.count;
      }
    )
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    this.http.post('http://LocalHost:8000/api/auth/me', {headers} ).subscribe(
      (response) => {
        console.log(response);
      },error =>
      {
        console.log(error);
      })
  }

}
