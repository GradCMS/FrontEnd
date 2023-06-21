import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClassbuilderService {

  constructor(private http:HttpClient) { }

  url = 'http://LocalHost:8000/api/cssClass'

  deleteClass(id:number){
    return this.http.delete(`${this.url}/${id}`).subscribe(
      (response) => {console.log(response)
      ;
        },error =>
      {
        console.log(error);
      }
    )

  }

  // geturl = 'http://LocalHost:8000/api/cssClass'
  getClasses(){
     return this.http.get(this.url);
  }

  editClass(id:number){
    return this.http.get(`${this.url}/${id}`);
  }
  // createUrl = 'http://LocalHost:8000/api/cssClass'
  createClass(cssClass:any){
    return this.http.post(this.url,cssClass)
  }

  updateClass(id:number,cssClass:any){
    return this.http.patch(`${this.url}/${id}`,cssClass)
  }

}
