import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Module } from 'src/app/models/Module';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  
  private configUrl="http://LocalHost:8000/api/module"
  constructor(private http: HttpClient) { 


  }
   //Create
   addModule(object:any): Observable<any>{
    return this.http.post<any>(this.configUrl,object)
   
   }
  //Read
  getModules(): Observable<any>{
    return this.http.get<any>(this.configUrl);  

  }
  getModuleByID(id:number):Observable<any>{
    return this.http.get<any>(this.configUrl+`/${id}`);  

  }
 
  //Update
  updateModule(object:any ,ID:number): Observable<any>{
  return this.http.patch<any>(this.configUrl+`/${ID}`,object) 
  

  }
  //Delete
  deleteModule(ID:number): Observable<Module>{
   return this.http.delete<Module>(this.configUrl+`/${ID}`)

  }
  
  




}
