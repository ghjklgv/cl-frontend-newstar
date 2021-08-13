import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";

import { Hero } from "./hero";
import { MessageService } from "./message.service";
import { Observable, of, Subject } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable()
export class HeroService {
  private heroesUrl = "api/heroes"; // URL to web api
  Heroes = new Subject<[]>();

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  /** GET heroes from the server */
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap((heroes: []) => {
        this.Heroes.next(heroes);
        // this.Heroes.next(heroes||[]);
        this.log(`fetched heroes`);
      }),
      catchError(this.handleError("getHeroes", []))
    );
  }

  /** GET hero by id. Return `undefined` when id not found */
  getHeroNo404<Data>(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/?id=${id}`;
    return this.http.get<Hero[]>(url).pipe(
      map((heroes) => heroes[0]), // returns a {0|1} element array
      tap((h) => {
        const outcome = h ? `fetched` : `did not find`;
        this.log(`${outcome} hero id=${id}`);
      }),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap((_) => {
        this.log(`fetched hero id=${id}`);
      }),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Hero[]>(`api/heroes/?name=${term}`).pipe(
      tap((_) => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>("searchHeroes", []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addHero(hero: Hero, arrLength: Number): Observable<Hero> {
    if (arrLength === 0) hero.id = 1;
    return this.http.post(this.heroesUrl, hero, httpOptions).pipe(
      tap((hero: Hero) => {
        this.log(`added hero w/ id=${hero.id}`);
      }),
      catchError(this.handleError<Hero>("addHero"))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === "number" ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, httpOptions).pipe(
      tap((_) => {
        this.log(`deleted hero id=${id}`);
      }),
      catchError(this.handleError<Hero>("deleteHero"))
    );
  }

  /** PUT: update the hero on the server */
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap((_) => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>("updateHero"))
    );
  }

  setChileHeroes(heroes) {
    if (heroes) this.Heroes.next(heroes);
  }

  getChileHeroes() {
    return this.Heroes.asObservable();
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add("HeroService: " + message);
  }
}
