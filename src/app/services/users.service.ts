import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Users } from '../models/users';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  REST_API_URL = "http://localhost:4000/api/Jamaica-Homes";
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

registerUsers(data: any): Observable<any>{
  return this.http.post(this.REST_API_URL+"/register", data);
}

authenticateUsers(data: any): Observable<Users>{
  return this.http.post(this.REST_API_URL+"/login", data)
}


}
