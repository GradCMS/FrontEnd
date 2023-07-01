import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private configUrl="http://LocalHost:8000/api/navBar"
  constructor(private http: HttpClient) { 


  }
   //Create
   addElement(object:any): Observable<any>{
    return this.http.post<any>(this.configUrl,object)
   
   }
  //Read
  getElement(): Observable<any>{
    return this.http.get<any>(this.configUrl);  

  }
  getElementByID(id:number):Observable<any>{
    return this.http.get<any>(this.configUrl+`/${id}`);  

  }
 
  //Update
  updateElement(object:any ,ID:number): Observable<any>{
  return this.http.patch<any>(this.configUrl+`/${ID}`,object) 
  

  }
  //Delete
  deleteElement(ID:number): Observable<any>{
   return this.http.delete<any>(this.configUrl+`/${ID}`)

  }
}
