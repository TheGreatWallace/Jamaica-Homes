import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Users } from '../models/users';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  REST_API_URL = `${environment.REST_API_URL}/api/Jamaica-Homes`;
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

registerUsers(data: any): Observable<any>{
  return this.http.post(this.REST_API_URL+"/register", data);
}

authenticateUsers(data: any): Observable<Users>{
  return this.http.post(this.REST_API_URL+"/login", data)
}


}
