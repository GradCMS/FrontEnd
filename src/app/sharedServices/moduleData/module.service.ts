import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  
  private configUrl="http://localhost:3000/modules"
  constructor(private http: HttpClient) { 


  }
   //Create
   addModule(object:any){
    return this.http.post(this.configUrl,object)
   
   }
  //Read
  getModules(){
    return this.http.get(this.configUrl);  

  }
 
  //Update
  updateModule(object:any ,ID:number){
  return this.http.put(this.configUrl+`/${ID}`,object) 
  

  }
  //Delete
  deleteModule(ID:number){
  return this.http.delete(this.configUrl+`/${ID}`)

  }
  
  




}
