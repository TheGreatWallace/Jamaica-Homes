import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Users } from '../models/users';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private REST_API_URL = `${environment.REST_API_URL}/api/v1/users/login`;
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }


checkLog(formData: any):Observable<Users>{
 return this.http.post<Users>(`${this.REST_API_URL}`, formData)
}



}
