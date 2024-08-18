import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environments.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService<T> {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  get(endpoint: string, model: any): Observable<any> {
    const params = new HttpParams({ fromObject: model });  
    return this.http.get<any>(`${this.apiUrl}/${endpoint}`, { params });
  }

  getById(endpoint: string, id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${endpoint}/${id}`);
  }

  post(endpoint: string, model: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${endpoint}`, model);
  }

  post_route(endpoint: string, model: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${endpoint}`, model);
  }

  put(endpoint: string, model: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${endpoint}`, model);
  }

  put_route(endpoint: string, route: string, model: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${endpoint}/${route}`, model);
  }

  delete(endpoint: string, id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${endpoint}/${id}`);
  }
}
