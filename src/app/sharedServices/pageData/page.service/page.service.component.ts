import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  
  private configUrl="http://LocalHost:8000/api/pages"
  private pageParentUrl="http://LocalHost:8000/api/pages/parents"
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
    const treeUrl = `${this.configUrl}/tree`;
    return this.http.get<any>(treeUrl);  

  }
  getParentPages():Observable<any>{
    return this.http.get<any>(this.pageParentUrl)
  }

  getPageByID(id:number):Observable<any>{
    return this.http.get<any>(this.configUrl+`/${id}`);  

  }
 
  //Update
  updatePage(object:any ,ID:number): Observable<any>{
  return this.http.patch<any>(this.configUrl+`/${ID}`,object) 
  

  }
  //Delete
  deletePage(ID:number): Observable<any>{
   return this.http.delete<any>(this.configUrl+`/${ID}`)



}
}

