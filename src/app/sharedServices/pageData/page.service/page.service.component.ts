import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  
  private configUrl="http://localhost:3000/pages"
  constructor(private http: HttpClient) { 


  }
   //Create
   creatPage(object:any): Observable<any>{
    return this.http.post<any>(this.configUrl,object)
   
   }
  //Read
  getAllPages(): Observable<any>{
    return this.http.get<any>(this.configUrl);  

  }
  getPagesTree(): Observable<any>{
    return this.http.get<any>(this.configUrl);  

  }

  getPageByID(id:number):Observable<any>{
    return this.http.get<any>(this.configUrl+`/${id}`);  

  }
 
  //Update
  updatePage(object:any ,ID:number): Observable<any>{
  return this.http.put<any>(this.configUrl+`/${ID}`,object) 
  

  }
  //Delete
  deletePage(ID:number): Observable<any>{
   return this.http.delete<any>(this.configUrl+`/${ID}`)



}
}

