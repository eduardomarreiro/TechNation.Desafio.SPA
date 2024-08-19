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

  get(endpoint: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${endpoint}`);
  }

  get_route(endpoint: string, route: string, model: any = {}): Observable<any> {
    let params = new HttpParams();

    Object.keys(model).forEach(key => {
      if (model[key] !== null && model[key] !== undefined && model[key] !== '') {
        params = params.append(key, model[key]);
      }
    });

    return this.http.get<any>(`${this.apiUrl}/${endpoint}/${route}`, { params });
  }

  getById(endpoint: string, id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${endpoint}/${id}`);
  }

  post(endpoint: string, model: any = {}): Observable<any> {
    const params = new HttpParams();

    Object.keys(model).forEach(key => {
      if (model[key] !== null && model[key] !== undefined && model[key] !== '') {
        params.append(key, model[key]);
      }
    });

    return this.http.post(`${this.apiUrl}/${endpoint}`, model, { params });
  }

  post_route(endpoint: string, route: string, model: any = {}): Observable<any> {
    const params = new HttpParams();
  
    Object.keys(model).forEach(key => {
      if (model[key] !== null && model[key] !== undefined && model[key] !== '') {
        params.append(key, model[key]);
      }
    });
  
    return this.http.post(`${this.apiUrl}/${endpoint}/${route}`, model, { params });
  }  

  put(endpoint: string, model: any = {}): Observable<any> {
    const params = new HttpParams();
  
    Object.keys(model).forEach(key => {
      if (model[key] !== null && model[key] !== undefined && model[key] !== '') {
        params.append(key, model[key]);
      }
    });
  
    return this.http.put(`${this.apiUrl}/${endpoint}`, model, { params });
  }  

  put_route(endpoint: string, route: string, model: any = {}): Observable<any> {
    const params = new HttpParams();
  
    Object.keys(model).forEach(key => {
      if (model[key] !== null && model[key] !== undefined && model[key] !== '') {
        params.append(key, model[key]);
      }
    });
  
    return this.http.put(`${this.apiUrl}/${endpoint}/${route}`, model, { params });
  }
  
  delete(endpoint: string, id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${endpoint}/${id}`);
  }
}
