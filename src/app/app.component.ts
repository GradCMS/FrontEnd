import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dashboard';
  private token = sessionStorage.getItem('token');
  constructor(private router: Router) { }
  ngOnInit(): void {
    if (!this.token) {
      this.router.navigate(['/login']); // Redirect to the login page if token doesn't exist
    }

  }
}
