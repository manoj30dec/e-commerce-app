import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { baseUrl } from './constant/constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomHttpService {
  constructor(private http:HttpClient) {
   }

  public get<T>(endPoint:string):Observable<T>{
    return this.http.get<T>(endPoint)
  }

  public post<T>(endPoint:string, body?:any):Observable<T>{
    return this.http.post<T>(baseUrl + endPoint, body)
  }


}
