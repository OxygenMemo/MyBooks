import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Book } from './Books';


@Injectable()
export class BooksServiceService {
  private books_Url = "http://localhost:19921";
  constructor(
    private http: HttpClient
  ) { }

  getBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(this.books_Url)
      .pipe(
        catchError(this.handleError("getBooks",[]))
      )
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
