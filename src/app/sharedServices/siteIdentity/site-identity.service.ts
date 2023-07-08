import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SiteIdentityService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8000/api/siteIdentity/1'

  getSiteIdentity(){
    return this.http.get('http://LocalHost:8000/api/siteIdentity/latest');
  }

  createSiteIdentity(siteIdentity:any){
    return this.http.post('http://localhost:8000/api/siteIdentity',siteIdentity)
  }
  updateSiteIdentity(siteIdentity:any){
    return this.http.patch(this.url,siteIdentity)
  }

}
