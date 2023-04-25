import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  
  private configUrl="http://localhost:3000/modules"
  constructor(private http: HttpClient) { 


  }

  getModules(){
    return this.http.get(this.configUrl);  

  }
  addModule(module:any){
   return this.http.post(this.configUrl,module)
  
  }




}
