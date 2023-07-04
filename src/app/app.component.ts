import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PermissionDisplay } from './models/Permission';
import { AuthServiceService } from './sharedServices/Auth/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dashboard';

  constructor(private router: Router,private serviceAuth:AuthServiceService) { }
  ngOnInit() {

  
  }


  


  }

