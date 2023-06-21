import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  private configUrl="http://LocalHost:8000/api/display"
  constructor(private http: HttpClient) { 


  }
   //Create
   addDisplay(object:any): Observable<any>{
    return this.http.post<any>(this.configUrl,object)
   
   }
  //Read
  getDisplay(): Observable<any>{
    return this.http.get<any>(this.configUrl);  

  }
  getDisplayByID(id:number):Observable<any>{
    return this.http.get<any>(this.configUrl+`/${id}`);  

  }
 
  //Update
  updateDisplay(object:any ,ID:number): Observable<any>{
  return this.http.patch<any>(this.configUrl+`/${ID}`,object) 
  

  }
  //Delete
  deleteDisplay(ID:number): Observable<any>{
   return this.http.delete<any>(this.configUrl+`/${ID}`)

  }
  
}
