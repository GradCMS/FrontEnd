import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private configUrl="http://localhost:3000/users"
  constructor(private http: HttpClient) { 


  }
   //Create
   creatUser(object:any): Observable<any>{
    return this.http.post<any>(this.configUrl,object)
   
   }
  //Read
  getAllUsers(): Observable<any>{
    return this.http.get<any>(this.configUrl);  

  }

  getUserByID(id:number):Observable<any>{
    return this.http.get<any>(this.configUrl+`/${id}`);  

  }
 
  //Update
  updateUser(object:any ,ID:number): Observable<any>{
  return this.http.patch<any>(this.configUrl+`/${ID}`,object) 
  

  }
  //susbend
  susbendUser(object:any ,ID:number): Observable<any>{
   return this.http.put<any>(this.configUrl+`/${ID}`,object)
}

  //unsusbend
  unsusbendUser(object:any ,ID:number): Observable<any>{
    return this.http.put<any>(this.configUrl+`/${ID}`,object)
 }
}

