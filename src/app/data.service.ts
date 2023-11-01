import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {


private apiUrl = 'https://api.github.com/search/users?q=devesh';


  constructor(private http: HttpClient) { }


  getApiData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }



}
