import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  
  private configUrl="http://localhost:3000/pages"
  private configUrl2="http://localhost:3000/tree"
  private configUrl3="http://localhost:4500/Displays"
  private configUrl4="http://localhost:4500/modules"


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
  getAllModules(): Observable<any>{
    return this.http.get<any>(this.configUrl4);  

  }
  getAllDisplays(): Observable<any>{
    return this.http.get<any>(this.configUrl3);  

  }
  getPagesTree(): Observable<any>{
    return this.http.get<any>(this.configUrl2);  

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
updatePagesTree(tree: any[]): Observable<any> {
  return this.http.put(this.configUrl2, tree); // Send the updated tree to your API endpoint using the HTTP PUT method
}
}

