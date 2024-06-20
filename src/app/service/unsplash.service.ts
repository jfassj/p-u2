import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {

  private accessKey = 'vRGLx4UN82vCRsv2PdCfvNJHuGqvQaqK-l7ouY-oPPY';
  private apiUrl = 'https://api.unsplash.com/photos/random';

  constructor(private http: HttpClient) {}

  getRandomPhoto(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?client_id=${this.accessKey}`);
  }
}
