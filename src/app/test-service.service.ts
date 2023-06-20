import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  url = 'http://localhost:8000/api/test/upload'

  constructor(private http: HttpClient) {

  }

  uploadFile(fileToUpload: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', fileToUpload);
    return this.http.post(this.url, formData);
  }

  createProduct(product:FormData):Observable<any>{

    return this.http.post(this.url,product)
  }

}
