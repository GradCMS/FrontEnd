import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  
  private deafultUrl="http://LocalHost:8000/api/pages"
  private treePages="http://LocalHost:8000/api/pages/tree"
  private pageParentUrl="http://LocalHost:8000/api/pages/parents"
  private standerdPagesUrl="http://LocalHost:8000/api/pages/standard"
  constructor(private http: HttpClient) { 


  }
   //Create
   creatPage(object:any): Observable<any>{
    return this.http.post<any>(this.deafultUrl,object)
   
   }
  //Read
  getAllPages(): Observable<any>{
    return this.http.get<any>(this.deafultUrl);  

  }
  getPagesTree(): Observable<any>{
    return this.http.get<any>(this.treePages);  

  }
  getParentPages():Observable<any>{
   
    return this.http.get<any>(this.pageParentUrl)
  

  }
  getStanderedPages():Observable<any>{
    return this.http.get<any>(this.standerdPagesUrl)
  


  }

  getPageByID(id:number):Observable<any>{
    return this.http.get<any>(this.deafultUrl+`/${id}`);  

  }
 
  //Update
  updatePage(object:any ,ID:number): Observable<any>{
  return this.http.patch<any>(this.deafultUrl+`/${ID}`,object) 
  

  }
  //Delete
  deletePage(ID:number): Observable<any>{
   return this.http.delete<any>(this.deafultUrl+`/${ID}`)

}

}

