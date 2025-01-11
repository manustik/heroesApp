import { environments } from '../../../environments/environments';
import { Hero } from '../interfaces/hero.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class HeroesService {

    private baseUrl: string = environments.baseUrl;

    constructor(private http: HttpClient) { }

    getHeroes(): Observable<Hero[]> {
        return this.http.get<Hero[]>(`${ this.baseUrl }/heroes`);
    }

    getHeroById( id: string ):Observable<Hero|undefined> {
        return this.http.get<Hero>(`${ this.baseUrl }/heroes/${ id }`)
            .pipe(
                catchError( error => of(undefined) )
            );
    }

    getSuggestions( query: string ): Observable<Hero[]> {
        return this.http.get<Hero[]>(`${ this.baseUrl }/heroes?q=${ query }&_limit=6`);
    }

    // getSouls(): Observable<Hero[]> {
    //     return this.http.get<Hero[]>(`${ this.baseUrl }/dark-souls`);
    // }
    
}