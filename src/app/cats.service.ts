import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Cat } from './cat';
@Injectable({
  providedIn: 'root'
})
export class CatsService {
  /** GET heroes from the server */
  getCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>('https://cataas.com/api/cats')
  }
  constructor(private http: HttpClient) { }
}
