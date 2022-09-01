import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { House } from '../models/houses';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  [x: string]: any;
  REST_API_URL = "http://localhost:4000/api/Jamaica-Homes";
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient ) { }


  getHouses(): Observable<House[]>{
    return this.http.get<House[]>(this.REST_API_URL);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.REST_API_URL, data);
  }

  getHouseById(id:any):Observable<House>{
    return this.http.get(`${this.REST_API_URL}/${id}`);
  }

  updateHouse(id:any,data:any):Observable<any>{
     return this.http.put(`${this.REST_API_URL}/${id}`, data)
  }

  deleteHouse(id:string):Observable<House>{
    return this.http.delete(`${this.REST_API_URL}/${id}`)
  }

  deleteAllHouses():Observable<any>{
    return this.http.delete(`${this.REST_API_URL}`)
  }
}
