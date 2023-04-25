import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CssClassService {
  private configUrl="http://localhost:3000/css_class"
  constructor(private http : HttpClient) { 


  }

  getCssClass(){
    return this.http.get(this.configUrl);
  }

  

}
