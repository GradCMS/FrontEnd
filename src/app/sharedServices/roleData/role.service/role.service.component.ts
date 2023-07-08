import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  
  private configUrl="http://LocalHost:8000/api/roles"
  constructor(private http: HttpClient) { 


  }
   //Create
   createRole(object:any): Observable<any>{
    return this.http.post<any>(this.configUrl,object)
   
   }
  //Read
  getAllRoles(): Observable<any>{
    return this.http.get<any>(this.configUrl);  

  }
 
  //Update
  updateRole(object:any ,ID:number): Observable<any>{
  return this.http.patch<any>(this.configUrl+`/${ID}`,object) 
  }
  
  //Delete
  deleteRole(ID:number): Observable<any>{
    return this.http.delete<any>(`${this.configUrl}/${ID}`)
 }
}

