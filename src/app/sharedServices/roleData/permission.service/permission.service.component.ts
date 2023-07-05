import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class permissionService {
  
  private configUrl="http://localhost:4000/permissions"
  constructor(private http: HttpClient) { 


  }
 
  //Read
  getAllPermissions(): Observable<any>{
    return this.http.get<any>(this.configUrl);  

  }

  
}

