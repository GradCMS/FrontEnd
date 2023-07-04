import { Component, OnInit } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';
import jwtDecode from "jwt-decode";

@Component({
  selector: 'app-landing-main',
  templateUrl: './landing-main.component.html',
  styleUrls: ['./landing-main.component.css']
})
export class LandingMainComponent implements OnInit {

  token = sessionStorage.getItem('token');
  constructor(private http : HttpClient , private router : Router) { }

  ngOnInit(): void {
    if (!this.token) {
      this.router.navigate(['/login']); // Redirect to the login page if token doesn't exist
    }
    else {
      const decodedToken: any = jwtDecode(this.token);
      sessionStorage.setItem('role', decodedToken.role);
      console.log(decodedToken.role);
    }
    console.log(sessionStorage)
  }
}
