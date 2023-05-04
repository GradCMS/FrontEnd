import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';      
@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.css']
})
export class UserMainComponent implements OnInit {

  constructor(private http: HttpClient) { 
  this.http.get('LocalHost:8000/api/users').subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit(): void {}

}
