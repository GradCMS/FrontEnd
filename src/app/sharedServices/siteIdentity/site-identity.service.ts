import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SiteIdentityService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8000/api/siteIdentity/38'

  getSiteIdentity(){
    return this.http.get(this.url);
  }

  createSiteIdentity(siteIdentity:any){
    return this.http.post('http://localhost:8000/api/siteIdentity',siteIdentity)
  }
  updateSiteIdentity(id:number,siteIdentity:any){
    return this.http.patch(this.url,siteIdentity)
  }

}
