import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormConfigService {
  // private apiUrl = 'https://run.mocky.io/v3/d06e3dc3-e267-4e59-b2d7-095861ecea5b'; // For 2x2 grid
  // private apiUrl = 'https://run.mocky.io/v3/9bbd736e-47d7-46cf-9da8-f41281920762'; // For 2x3 grid
  // private apiUrl = 'https://run.mocky.io/v3/e845bddc-e7b3-41ce-936b-1efbfc2f99b0'; // For 2 sections
  private apiUrl = 'https://run.mocky.io/v3/432eeb75-ac37-4c51-8223-af45c625dc25'; // For 2 sections

  constructor(private http: HttpClient) {}

  getFormConfig(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
