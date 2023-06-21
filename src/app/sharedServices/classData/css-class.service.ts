import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CssClassService {
  private configUrl="http://LocalHost:8000/api/cssClass"
  constructor(private http : HttpClient) { 


  }

  getCssClass(){
    return this.http.get(this.configUrl);
  }

  

}
