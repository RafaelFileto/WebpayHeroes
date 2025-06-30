import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private readonly baseUrl = `http://localhost:3000`;

  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  listHeroes(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/heroes`, this.httpOptions);
  }

  listHeroById(id: any): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/heroes/${id}`, this.httpOptions);
  }

  patchHero(id: any, hero: any): Observable<any> {
    return this.httpClient.patch(`${this.baseUrl}/heroes/${id}`, hero, this.httpOptions);
  }

  removeHero(id: any): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/heroes/${id}`, this.httpOptions);
  }

  createHero(hero: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/heroes`, hero, this.httpOptions);
  }
}
