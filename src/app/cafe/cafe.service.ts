import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Cafe } from './cafe';

@Injectable({
  providedIn: 'root',
})
export class CafeService {
  private http = inject(HttpClient);
  private apiUrl: string = environment.baseUrl;

  getCafes(): Observable<Cafe[]> {
    return this.http.get<Cafe[]>(this.apiUrl);
  }
}
